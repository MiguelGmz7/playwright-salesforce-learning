const {test, expect, chromium} = require("@playwright/test");
let context;
let page;

test.beforeAll(async() => {
    context = await chromium.launchPersistentContext(userDataDirectory, {
        headless = false,
        args = ['--start-maximized'],
    });

    page = await context.newPage();
    await page.goto("https://login.salesforce.com");

    
});