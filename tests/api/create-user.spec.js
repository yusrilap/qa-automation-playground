import { test, expect } from '@playwright/test';

test.describe('POST Create User API', () => {

  test('@api Create user should return 200 and valid response', async ({ request }) => {
    const payload = {
      firstName: 'QA',
      lastName: 'Automation',
      age: 25
    };

    const response = await request.post(
      'https://dummyjson.com/users/add',
      {
        data: payload,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    // data validation
    expect(body.firstName).toBe(payload.firstName);
    expect(body.lastName).toBe(payload.lastName);
    expect(body.age).toBe(payload.age);

    // system-generated field
    expect(body.id).toBeTruthy();
  });

});
