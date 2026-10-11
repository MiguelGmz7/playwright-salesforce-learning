const { jwtAuthenticate, jwtLogin, loginWithJwt } = require("../tests/helpers/salesforceAuth.js");
class SetupPage {
    constructor(page) {
        this.page = page;
        this.appLauncher = page.getByRole('button', { name: 'App Launcher' });
        this.searchBar = page.getByRole('combobox', {name: 'Search apps and items...'});
    }

    async open(objectName) {
        const session = await jwtAuthenticate();
        await jwtLogin(this.page, session, "/lightning/setup/SetupOneHome/home");
        await this.appLauncher.click();
        await this.searchBar.fill(objectName);
        const resultLink = this.page.getByRole('option', { name: objectName });
        await resultLink.click();
    }
}

module.exports = {SetupPage};