const {test, expect} = require("@playwright/test");

test("Salesforce UI interactions", async({page})=> {

    await page.goto("https://login.salesforce.com");

    await expect(page).toHaveTitle("Login | Salesforce");

    await page.locator("#username").fill("")
    await page.locator("#username").fill("")

    await page.locator("Login").click();
});