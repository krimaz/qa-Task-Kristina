class LoginPage {
    get loginHeader() {
        return cy.get('div#create-account.cart-step').contains('h2.cart-step__title', 'Create your account');
    }

    get openLoginFormBtn() {
        return cy.get('a#hcart-login-secondary');
    }

    get emailField() {
        return cy.get('div.h-input.primary.login__address.h-mb-16 input.h-input__input');
    }

    get passwordField() {
        return cy.get('div.h-input.primary.login__password.h-mb-24 input.h-input__input');
    }

    get loginBtn() {
        return cy.get('button.h-button.w-100[type="submit"]');
    }

    checkIfLoginPageIsVisibleAndLogin() {
        this.loginHeader.then(header => {
          if (header.length > 0) {
            this.openLoginFormBtn.click();
          }
        });
      }
    
    fillLoginForm() {
        const email = Cypress.env('email');
        const password = Cypress.env('password');

        if (!email || !password) {
            throw new Error('Email or password environment variables are not set.');
        }

        this.emailField.clear().type(email, { sensitive: true });
        this.passwordField.clear().type(password, { sensitive: true });
        this.loginBtn.click();
    }
}
export default new LoginPage();