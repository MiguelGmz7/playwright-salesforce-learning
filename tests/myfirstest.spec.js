// const {default:test} = require(@playwirght/test)
const {test} = require("@playwright/test");

test('My First test', async ({browser})=>{ // "async ()=>" == "async function ()"
    //Playwright Code
    //Step1 launch browser
    browser.newContext();//to be able to use await we need to make this function an async function
    //Step2 Enter Credentials
    //Step3 Click Sign Button


});