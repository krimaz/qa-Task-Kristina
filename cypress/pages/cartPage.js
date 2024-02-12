class CartPage {
    get getSelectedPlanHeader() {
        return cy.contains('h4.d-inline-block.h-m-0', 'Business Web Hosting');
    }

    getPeriod(period) {
        return cy.contains('span.up-body.cart-period__period', period);
    }

    get paymentHeader() {
        return cy.get('div.select-payment').contains('h2.cart-step__title', 'Select payment');
    }

    get paymentName() {
        return cy.get('h4.plan-info__plan-name')
        .should('contain', '24 Months');
    }

    isSelectedPlanHeaderVisible() {
        this.getSelectedPlanHeader.should('be.visible');
    }

    selectPlan(period) {
        this.getPeriod(period).click();
    }

    isPlanVisible(period) {
        this.getPeriod(period).should('be.visible');
    }
}
export default new CartPage();