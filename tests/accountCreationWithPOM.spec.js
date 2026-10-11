const { test, expect } = require("@playwright/test");
const { SetupPage } = require("../salesforcePageObject/SetupPage");
const { AccountPage } = require("../salesforcePageObject/AccountPage");

test.describe("Account creation using POM", () => {
    let accountPage;

    test.beforeEach(async ({ page }) => {
        accountPage = new AccountPage(page);
        await accountPage.navigateDirectly()
    });

    ["Hot", "Warm", "Cold"].forEach(raiting => {
        test(`Rating - ${raiting}`, async ({ page }) => {
            await accountPage.clickNew();
            await accountPage.fillAccountName("Test - Account");
            await accountPage.selectRating(raiting);
            await accountPage.fillSlaExpirationDate("12/31/2024");
            await accountPage.clickSave();

            // Assert Account Name heading
            await expect(accountPage.getAccountHeading("Test - Account")).toBeVisible();

            // Assert Details tab values
            await accountPage.goToDetails();
            await expect(accountPage.getFieldValue(raiting)).toBeVisible();
            await expect(accountPage.getFieldValue("12/31/2024")).toBeVisible();
        });
    });
});
