import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('API to UI End-to-End Login Flow', () => {

  test('@e2e Verify login UI flow with API health check as precondition', async ({ request, page }) => {

    // STEP 1: API Health Check / Data Setup
    const apiResponse = await request.get('https://dummyjson.com/users');
    expect(apiResponse.status()).toBe(200);

    const apiBody = await apiResponse.json();
    expect(apiBody.users.length).toBeGreaterThan(0);

    // STEP 2: UI Login (Actual behavior under test)
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // STEP 3: UI Validation
    await expect(page).toHaveURL(/secure/);
    await expect(page.locator('#flash')).toContainText('secure area');

  });

});
