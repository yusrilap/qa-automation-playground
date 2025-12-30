import { test, expect } from '@playwright/test';

test.describe('API Schema Validation - Users', () => {

  test('@api Schema validation for users list', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/users');
    expect(response.status()).toBe(200);

    const body = await response.json();

    // Root level
    expect(body).toHaveProperty('users');
    expect(Array.isArray(body.users)).toBeTruthy();
    expect(body).toHaveProperty('total');
    expect(body).toHaveProperty('skip');
    expect(body).toHaveProperty('limit');

    // Validate first user object schema
    const user = body.users[0];

    expect(user).toHaveProperty('id');
    expect(typeof user.id).toBe('number');

    expect(user).toHaveProperty('firstName');
    expect(typeof user.firstName).toBe('string');

    expect(user).toHaveProperty('lastName');
    expect(typeof user.lastName).toBe('string');

    expect(user).toHaveProperty('age');
    expect(typeof user.age).toBe('number');

    expect(user).toHaveProperty('email');
    expect(typeof user.email).toBe('string');
  });

});
