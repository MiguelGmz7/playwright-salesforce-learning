const {test, expect} = require("@playwright/test");

test("Salesforce UI interactions", async({page})=> {

    await page.goto("https://login.salesforce.com");

    await expect(page).toHaveTitle("Login | Salesforce");

    await page.locator("#username").fill("miguel.gomez.lopez.87b487d1c137@agentforce.com")
});