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

    await page.locator("#username").fill(process.env.USER);
    console.log(process.env.USER);
    await page.locator("#login").click();
    
    await page.locator("#password").fill(process.env.PASSWORD);
    console.log(process.env.PASSWORD);
    await page.locator("#login").click();

});