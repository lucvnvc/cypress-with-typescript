class LoginPage {
  elements = {
    inputUser: () => cy.get('#user-name'),
    inputPassword: () => cy.get('#password'),
    btnLogin: () => cy.get('#login-button'),
    lbError: () => cy.get('h3[data-test="error"]'),
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
}

export default new LoginPage();
