class HomePage {
  get privacyHeader() {
    return cy.get('h3.h-cookie-consent__title');
  }
    
  get acceptAllBtn() {
    return cy.get('button[data-click-id="hgr-cookie_consent-accept_all_btn"]');
  }   
      
  getAddToCartBtn(type) {
    return cy.get(`button[data-click-id="hgr-homepage-pricing_table-add_to_cart-hosting_hostinger_${type.toLowerCase()}"]`);
  }

  checkPrivacyHeaderAndAccept() {
    this.privacyHeader.then(header => {
      if (header.length > 0) {
        this.acceptAllBtn.click();
      }
    });
  }

  scrollToAddToCartBtn(type) {
    this.getAddToCartBtn(type).scrollIntoView();
    this.getAddToCartBtn(type).should('be.visible');
  }

  addToCart(type) {
    this.getAddToCartBtn(type).click();
  }
}
export default new HomePage();
