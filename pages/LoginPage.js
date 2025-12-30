export class LoginPage {
  constructor(page) {
    this.page = page;

    // locators
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('#flash');
  }

  async visit() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username, password) {
    if (username) {
      await this.usernameInput.fill(username);
    }
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
