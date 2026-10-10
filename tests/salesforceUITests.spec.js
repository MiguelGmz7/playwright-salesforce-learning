const { test, expect } = require("@playwright/test");
const { jwtAuthenticate, jwtLogin, loginWithJwt } = require("./helpers/salesforceAuth");


test("Salesforce JWT Frontdoor login", async ({ page }) => {
  // Equivalent to Copado/QForce: JWTAuthenticate, followed by JWTLogin.
  const session = await jwtAuthenticate();
  await jwtLogin(page, session, "/lightning/page/home");
  await expect(page).toHaveURL(/\/lightning\//);
});

test("Contracts", async ({ page }) => {
  // Equivalent to Copado/QForce: JWTAuthenticate, followed by JWTLogin.
  const session = await jwtAuthenticate();
  await jwtLogin(page, session, "/lightning/o/Contract/list?filterName=AllContracts");
});

test("Accounts", async ({ page }) => {
  // Equivalent to Copado/QForce: JWTAuthenticate, followed by JWTLogin.
  const session = await jwtAuthenticate();
  await jwtLogin(page, session, "/lightning/o/Account/list?filterName=AllAccounts");
});

test.only("Create a new Account", async ({ page }) => {
  // Equivalent to Copado/QForce: JWTAuthenticate, followed by JWTLogin.
  const session = await jwtAuthenticate();
  await jwtLogin(page, session, "/lightning/o/Account/list?filterName=AllAccounts");
  
  await page.getByRole('button', { name: 'New' }).click();

  //textbox
  await page.getByRole('textbox', { name: 'Account Name' }).click();
  await page.getByRole('textbox', { name: 'Account Name' }).fill('Test - Account');

  //ComboBox
  await page.getByRole('combobox', { name: 'Rating' }).click();
  await page.getByRole('option', { name: 'Warm' }).click();

  // Date picker — type directly into the input (format: MM/DD/YYYY)
  // await page.getByRole('textbox', { name: 'SLA Expiration Date' }).click();
  await page.getByRole('textbox', { name: 'SLA Expiration Date' }).fill('12/31/2024');
  // await page.keyboard.press('Escape'); // close the calendar picker

  await page.getByRole('button', { name: 'Save', exact: true }).click();

  // Assert Account Name heading
  await expect(page.getByRole('heading', { name: 'Test - Account' })).toBeVisible();

  // Assert Account Owner link
  await expect(page.getByRole('link', { name: 'Miguel Gomez' })).toBeVisible();

  await page.getByRole('tab', { name: 'Details'}).click();
  // Assert Rating value (read-mode detail field)
  await expect(page.locator('span.test-id__field-value.slds-form-element__static.slds-grow.word-break-ie11', { hasText: 'Warm' })).toBeVisible();

  // Assert SLA Expiration Date value (read-mode detail field)
  await expect(page.locator('span.test-id__field-value.slds-form-element__static.slds-grow.word-break-ie11', { hasText: '12/31/2024' })).toBeVisible();
});