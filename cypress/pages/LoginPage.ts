class LoginPage {
  elements = {
    inputUser: () => cy.get('input[name="username"]'),
    inputPassword: () => cy.get('input[name="password"]'),
    btnLogin: () => cy.get('#btn-login'),
    lbError: () => cy.get('p[class="lead text-danger"]'),
  };

  setUser(user: string) {
    this.elements.inputUser().clear().type(user);
  }

  setPassword(password: string) {
    this.elements.inputPassword().clear().type(password);
  }

  clickOnLogin() {
    this.elements.btnLogin().click();
  }

  login(user?: string, password?: string): void {
    if (user) {
      this.setUser(user);
    }
    if (password) {
      this.setPassword(password);
    }
    this.clickOnLogin();
  }

  getError() {
    return this.elements.lbError();
  }
}

export default new LoginPage();
