const fs = require('fs');
const {test, expect, chromium} = require("@playwright/test");

test("Salesforce Login With Saved Session", async ({ page }) => {
    // Check if cookies file exists
    if (fs.existsSync('session/cookies.json')) {
        // Load saved cookies
        const cookies = JSON.parse(fs.readFileSync('session/cookies.json'));
        await page.context().addCookies(cookies);
        console.log("✅ Cookies loaded successfully!");
        // Go directly to Salesforce - no login needed!
        await page.goto("https://login.salesforce.com");
        

        // await expect(page).toHaveTitle("Login | Salesforce");

        await page.locator("#username").fill(process.env.USER);
        console.log(process.env.USER);
        await page.locator("#Login").click();
    
        await page.locator("#password").fill(process.env.PASSWORD);
        console.log(process.env.PASSWORD);
        await page.locator("#Login").click();
        await expect(page).toHaveTitle("Lightning Experiences | Salesforce")
        await page.screenshot({ path: "screenshots/session-loaded.png" });
    } else {
        console.log("❌ No cookies found - Please run the login test first!");
    }
});