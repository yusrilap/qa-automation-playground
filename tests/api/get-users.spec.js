import { test, expect } from '@playwright/test';

test.describe('GET Users API', () => {

  test('@api GET list users should return 200', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/users');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.users).toBeDefined();
    expect(body.users.length).toBeGreaterThan(0);
    expect(body.total).toBeGreaterThan(0);
  });

});
