<?php

/*
 * This file is part of zerosonesfun/expired-posts.
 *
 * Copyright (c) 2020 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Zerosonesfun\ExpiredPosts\Listeners;

use Carbon\Carbon;
use Flarum\Discussion\Discussion;
use Flarum\Post\Event\Saving;
use Flarum\Settings\SettingsRepositoryInterface;
use Zerosonesfun\ExpiredPosts\Validators\NecrobumpingPostValidator;
use Illuminate\Support\Arr;

class ValidateNecrobumping
{
    protected $validator;
    /**
     * @var SettingsRepositoryInterface
     */
    private $settings;

    public function __construct(NecrobumpingPostValidator $validator, SettingsRepositoryInterface $settings)
    {
        $this->validator = $validator;
        $this->settings = $settings;
    }

    public function handle(Saving $event)
    {
        if ($event->post->exists || $event->post->number == 1) {
            return;
        }

        $lastPostedAt = $event->post->discussion->last_posted_at;
        $days = $this->getDays($event->post->discussion);

        if ($lastPostedAt && $days && $lastPostedAt->diffInDays(Carbon::now()) >= $days) {
            $this->validator->assertValid([
                'expired-posts' => Arr::get($event->data, 'attributes.expired-posts'),
            ]);
        }
    }

    /**
     * @param Discussion $discussion
     *
     * @return int
     */
    protected function getDays($discussion)
    {
        $days = $this->settings->get('expired-posts.days');
        $tags = $discussion->tags;

        if ($tags && $tags->isNotEmpty()) {
            $tagDays = $tags->map(function ($tag) {
                return $this->settings->get("expired-posts.days.tags.{$tag->id}");
            })->filter(function ($days) {
                return $days != null && $days != '' && !is_nan($days) && (int) $days >= 0;
            });

            if ($tagDays->isNotEmpty()) {
                $days = $tagDays->contains(0)
                    ? null
                    : $tagDays->min();
            }
        }

        return is_nan($days) || $days < 1 ? null : (int) $days;
    }
}
