import Component from 'flarum/common/Component';

export default class NecrobumpingCurtain extends Component {
    oninit(vnode) {
        super.oninit(vnode);
    }

    oncreate(vnode) {
        super.oncreate(vnode);
    }

    view() {
        const customTitle = app.data['fof-prevent-necrobumping.message.title'];
        const customDescription = app.data['fof-prevent-necrobumping.message.description'];

        const time = dayjs().add(this.attrs.days, 'days').fromNow(true);

        return (
            <div>
                <div id="curtain-overlay">
                    <div id="curtain-text">
                            <h4>
                                {(customTitle && customTitle.replace(/\[time]/i, time)) ||
                                    app.translator.trans('fof-prevent-necrobumping.forum.composer.warning.title', {
                                        time,
                                    })}
                            </h4>

                            <p>{customDescription || app.translator.trans('fof-prevent-necrobumping.forum.composer.warning.description')}</p>
                    </div>
                </div>
            </div>
        );
    }
}
