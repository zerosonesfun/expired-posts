import SettingsPage from './components/SettingsPage';

app.initializers.add('zerosonesfun/expired-posts', () => {
    app.extensionData.for('zerosonesfun-expired-posts').registerPage(SettingsPage);
});
