const {test, expect} = require("@playwright/test");
const fs = require('fs');

// test("Salesforce Blank Login", async({page})=> {

//     await page.goto("https://login.salesforce.com");

//     await expect(page).toHaveTitle("Login | Salesforce");

//     await page.locator("#username").fill("")
//     await page.locator("#Login").click();

//     await expect(page.locator("#error")).toHaveText("Error: Please enter your username.");
// });

test("Salesforce Successfull Login", async({browser})=> {

    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        extraHTTPHeaders: {
            'Accept-Language': 'en-US,en;q=0.9',
        }
    });

    const page = await context.newPage();

    await page.goto("https://login.salesforce.com");

    await expect(page).toHaveTitle("Login | Salesforce");

    await page.locator("#username").fill(process.env.USER);
    console.log(process.env.USER);
    await page.locator("#Login").click();
    
    await page.locator("#password").fill(process.env.PASSWORD);
    console.log(process.env.PASSWORD);
    await page.locator("#Login").click();

    await page.pause();
    // const verificationCode = await askForCode();
    // console.log("Code entered:", verificationCode);
    // await page.pause();
    
    // await page.locator("#emc").fill(verificationCode);
    await page.locator("#save").click();

    await expect(page).toHaveTitle("Lightning Experience | Salesforce")
    // await page.waitForLoadState("networkidle");
    const cookies = await page.context().cookies();
    fs.writeFileSync('session/cookies.json', JSON.stringify(cookies, null, 2));

    await page.screenshot({ 
        path: "screenshots/after-login.png",
        fullPage: true  // captures full page
    });



    await context.close();
});