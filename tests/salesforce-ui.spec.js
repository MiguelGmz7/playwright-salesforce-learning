const {test, expect} = require("@playwright/test");

test("Salesforce Blank Login", async({page})=> {

    await page.goto("https://login.salesforce.com");

    await expect(page).toHaveTitle("Login | Salesforce");

    await page.locator("#username").fill("")
    await page.locator("#Login").click();

    await expect(page.locator("#error")).toHaveText("Error: Please enter your username.");
});

test("Salesforce Successfull Login", async({page})=> {

    await page.goto("https://login.salesforce.com");

    await expect(page).toHaveTitle("Login | Salesforce");

    await page.locator("#username").fill("")
    await page.locator("#Login").click();

    await expect(page.locator("#error")).toHaveText("Error: Please enter your username.");
});