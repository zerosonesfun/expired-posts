import Component from 'flarum/common/Component';

export default class NecrobumpingCurtain extends Component {
    oninit(vnode) {
        super.oninit(vnode);
    }

    oncreate(vnode) {
        super.oncreate(vnode);
        document.getElementsByClassName('DiscussionPage-nav')[0].style.visibility = 'hidden';
        document.getElementsByClassName('ReplyPlaceholder')[0].style.visibility = 'hidden';
        [].forEach.call(document.querySelectorAll('.Post-actions'), function (el) {
            el.style.visibility = 'hidden';
          });
    }

    view() {
        const customTitle = app.data['expired-posts.message.title'];
        const customDescription = app.data['expired-posts.message.description'];

        const time = dayjs().add(this.attrs.days, 'days').fromNow(true);

        return (
            <div>
                <div id="curtain-overlay">
                    <div id="curtain-text">
                            <h4>
                                {(customTitle && customTitle.replace(/\[time]/i, time)) ||
                                    app.translator.trans('expired-posts.forum.composer.warning.title', {
                                        time,
                                    })}
                            </h4>

                            <p>{customDescription || app.translator.trans('expired-posts.forum.composer.warning.description')}</p>
                    </div>
                </div>
            </div>
        );
    }
}
