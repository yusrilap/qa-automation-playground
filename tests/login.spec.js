import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Feature', () => {

  test('@smoke Login success with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.visit();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(page).toHaveURL(/secure/);
    await expect(page.locator('#flash')).toContainText('You logged into a secure area');
  });

  test('@regression Login fails when email is empty', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.visit();
    await loginPage.login('', 'SuperSecretPassword!');

    await expect(loginPage.errorMessage).toContainText('username is invalid');
  });

});
