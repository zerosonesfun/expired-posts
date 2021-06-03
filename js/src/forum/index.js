import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import ReplyComposer from 'flarum/common/components/ReplyComposer';
import DiscussionListItem from 'flarum/common/components/DiscussionListItem';
import DiscussionHero from 'flarum/common/components/DiscussionHero';
import NecrobumpingCheck from './components/NecrobumpingCheck';
import NecrobumpingCurtain from './components/NecrobumpingCurtain';

const isNecrobumping = (discussion) => {
    if (!discussion) return false;

    const days = discussion.attribute('expired-posts');
    const lastPostedAt = discussion.lastPostedAt();

    if (lastPostedAt && days && dayjs().subtract(days, 'days').isAfter(lastPostedAt.getTime())) {
        return days;
    }

    return false;
};

app.initializers.add('zerosonesfun/expired-posts', () => {
    extend(TextEditor.prototype, 'view', function (vdom) {
        if (!app.composer.bodyMatches(ReplyComposer)) return;

        const $textarea = vdom.children && vdom.children.find((e) => e.tag === 'textarea');
        const composer = app.composer;
        const { discussion, disabled } = composer.body.attrs;

        if ($textarea && isNecrobumping(discussion)) {
            if (!disabled) delete $textarea.attrs.disabled;
            else $textarea.attrs.disabled = true;
        }
    });

    extend(DiscussionListItem.prototype, 'infoItems', function(items) {
        const days = isNecrobumping(this.attrs.discussion);

        if (days) {
        items.add('script', <script>$('.item-expired-posts').closest('.DiscussionListItem').addClass('Expired');</script>);
        }
      });

    extend(ReplyComposer.prototype, 'headerItems', function (items) {
        const days = isNecrobumping(this.attrs.discussion);

        if (days) {
            items.add(
                'expired-posts',
                NecrobumpingCheck.component({
                    days,
                    set: (v) => (this.composer.fields.fofNecrobumping = v),
                    disable: (d) => (this.composer.body.attrs.disabled = d),
                })
            );
        }
    });

    extend(DiscussionListItem.prototype, 'infoItems', function (items) {
        const days = isNecrobumping(this.attrs.discussion);

        if (days) {
            items.add(
                'expired-posts',
                NecrobumpingCheck.component({
                    days,
                }), 0
            );
        }
    });

    extend(DiscussionHero.prototype, 'items', function (items) {
        const days = isNecrobumping(this.attrs.discussion);

        if (days) {
            items.add(
                'expired-posts',
                NecrobumpingCurtain.component({
                    days,
                })
            );   
        }
    });

    extend(ReplyComposer.prototype, 'data', function (data) {
        data['expired-posts'] = this.composer.fields.fofNecrobumping;
    });
});
  

export const components = {
    NecrobumpingCheck,
    NecrobumpingCurtain,
};
