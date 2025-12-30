import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login fails when email is empty', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.visit();
  await loginPage.login('', 'SuperSecretPassword!');

  await expect(loginPage.errorMessage).toContainText('username is invalid');
});
