const { jwtAuthenticate, jwtLogin } = require("../tests/helpers/salesforceAuth");

class AccountPage {
    constructor(page) {
        this.page = page;
        this.newButton = page.getByRole('button', { name: 'New' });
        this.accountNameInput = page.getByRole('textbox', { name: 'Account Name' });
        this.ratingCombobox = page.getByRole('combobox', { name: 'Rating' });
        this.slaExpirationDateInput = page.getByRole('textbox', { name: 'SLA Expiration Date' });
        this.saveButton = page.getByRole('button', { name: 'Save', exact: true });
        this.detailsTab = page.getByRole('tab', { name: 'Details' });
    }

    async navigateDirectly() {
        const session = await jwtAuthenticate();
        await jwtLogin(this.page, session, "/lightning/o/Account/list?filterName=AllAccounts");
    }

    async clickNew() {
        await this.newButton.click();
    }

    async fillAccountName(accountName) {
        await this.accountNameInput.click();
        await this.accountNameInput.fill(accountName);
    }

    async selectRating(rating) {
        await this.ratingCombobox.click();
        await this.page.getByRole('option', { name: rating }).click();
    }

    async fillSlaExpirationDate(date) {
        await this.slaExpirationDateInput.fill(date);
    }

    async clickSave() {
        await this.saveButton.click();
    }

    async createAccount({ accountName, rating, slaExpirationDate }) {
        await this.clickNew();
        if (accountName) await this.fillAccountName(accountName);
        if (rating) await this.selectRating(rating);
        if (slaExpirationDate) await this.fillSlaExpirationDate(slaExpirationDate);
        await this.clickSave();
    }

    async goToDetails() {
        await this.detailsTab.click();
    }

    getAccountHeading(accountName) {
        return this.page.getByRole('heading', { name: accountName });
    }

    getFieldValue(text) {
        return this.page.locator('span.test-id__field-value.slds-form-element__static.slds-grow.word-break-ie11', { hasText: text });
    }
}

module.exports = { AccountPage };
