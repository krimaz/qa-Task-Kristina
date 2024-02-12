import homePage from "../pages/homePage";
import cartPage from "../pages/cartPage";
import loginPage from "../pages/loginPage";


const type = 'Business';
const period = '24 months';

  beforeEach(() => {
    cy.visit('/');
    cy.url().should('include', 'hostinger.com');
    homePage.checkPrivacyHeaderAndAccept();
  })

describe('Hosting Plan Purchase Flow', () => {
  it('Initiates purchase of any plan for 24 months', () => {
    homePage.scrollToAddToCartBtn(type);
    homePage.addToCart(type);
    
    // Check if url changed
    cy.url().should('include', 'cart.hostinger.com');
    // Check if selected plan header is visible
    cartPage.isSelectedPlanHeaderVisible();
    
    // Check if preferred period visible
    cartPage.isPlanVisible(period);
    cartPage.selectPlan(period);

    loginPage.checkIfLoginPageIsVisibleAndLogin();
    loginPage.fillLoginForm();

    cartPage.paymentHeader.should('be.visible');
    cartPage.paymentName.should('be.visible');
  })
})