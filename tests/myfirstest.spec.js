// const {default:test} = require(@playwirght/test)
const {test, expect} = require("@playwright/test");

test('Test With Browser Context', async ({browser})=>{ // "async ()=>" == "async function ()" and we get the browser parameter from playwrigth/test
    //Playwright Code
    //Step1 launch browser
    const context = await browser.newContext(); //Launch the browser and await to open properly
    const page = await context.newPage(); //Launch the tab and await to open properly
    await page.goto("https://playwright.dev") //Launch the URL
    console.log(await page.title());
    expect()
    
    //We need to add await so it can be able to AWAIT for instructions to occur, if not
    // the code will do all at once
    //Step2 Enter Credentials
    //Step3 Click Sign Button


});

test('Test With Page Context', async ({page})=>{ // "async ()=>" == "async function ()" and we get the browser parameter from playwrigth/test
    //Playwright Code
    //Step1 launch browser
    await page.goto("https://playwright.dev") //Launch the URL
    
    //We need to add await so it can be able to AWAIT for instructions to occur, if not
    // the code will do all at once
    //Step2 Enter Credentials
    //Step3 Click Sign Button


});