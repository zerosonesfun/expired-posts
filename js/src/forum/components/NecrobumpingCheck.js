import Component from 'flarum/common/Component';

export default class NecrobumpingCheck extends Component {
    oninit(vnode) {
        super.oninit(vnode);
    }

    oncreate(vnode) {
        super.oncreate(vnode);
    }

    view() {
        const customTitle = app.data['expired-posts.message.title'];
        const customDescription = app.data['expired-posts.message.description'];

        const time = dayjs().add(this.attrs.days, 'days').fromNow(true);

        return (
            <div>
                <div className="Alert">
                    <div className="Alert-body">
                        <div className="hide">
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
            </div>
        );
    }
}
