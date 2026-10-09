const {test, expect} = require("@playwright/test");

test('Login without passsword (Web Automation sauce lab)', async({page})=>{ //Check notebook Notebook\Locators.md
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    const dropdown = await page.locator("select.product_sort_container");
    await dropdown.selectOption("lohi");

});