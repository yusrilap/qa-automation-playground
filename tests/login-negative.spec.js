import { test, expect } from '@playwright/test';

test('Login fails when email is empty', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();


  const errorMessage = page.locator('#flash');
  await expect(errorMessage).toContainText('Your username is invalid');
});
