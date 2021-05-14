<?php

/*
 * This file is part of zerosonesfun/expired-posts.
 *
 * Copyright (c) 2020 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Zerosonesfun\ExpiredPosts\Validators;

use Flarum\Foundation\AbstractValidator;

class NecrobumpingPostValidator extends AbstractValidator
{
    /**
     * {@inheritdoc}
     */
    protected $rules = [
        'expired-posts' => 'accepted',
    ];

    /**
     * {@inheritdoc}
     */
    protected function getMessages()
    {
        return [
            'accepted' => app('translator')->trans('expired-posts.forum.composer.warning.error'),
        ];
    }
}
