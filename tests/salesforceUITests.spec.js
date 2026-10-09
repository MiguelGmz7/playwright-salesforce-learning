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
  await page.screenshot({ path: "screenshots/contracts.png" });
});

test("Accounts", async ({ page }) => {
  // Equivalent to Copado/QForce: JWTAuthenticate, followed by JWTLogin.
  const session = await jwtAuthenticate();
  await jwtLogin(page, session, "/lightning/o/Account/list?filterName=AllAccounts");
  await page.screenshot({ path: "screenshots/accounts.png" });
});

test("Create a new Account", async ({ page }) => {
  // Equivalent to Copado/QForce: JWTAuthenticate, followed by JWTLogin.
  const session = await jwtAuthenticate();
  await jwtLogin(page, session, "/lightning/o/Account/list?filterName=AllAccounts");
  
  await page.getByRole('button', { name: 'New' }).click();

  await page.getByRole('textbox', { name: 'Account Name' }).click();
  await page.getByRole('textbox', { name: 'Account Name' }).fill('Test - Account');

  await page.getByRole('button', { name: 'Save', exact: true }).click();

  // Assert Account Name heading
  await expect(page.getByRole('heading', { name: 'Test - Account' })).toBeVisible();

  // Assert Account Owner link
  await expect(page.getByRole('link', { name: 'Miguel Gomez' })).toBeVisible();

  await page.screenshot({ path: "screenshots/new_account.png" });
});