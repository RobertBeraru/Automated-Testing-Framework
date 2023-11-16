import headerPageMenu from "../pages/header-page.menu";
import middlePageMenu from "../pages/middle-page-menu";

describe('Place order and checkout test suite', () => {
    it('Place order test', () => {
        cy.login();
        headerPageMenu.getHomeBtn().click();
        middlePageMenu.getSkinSheenBronzerStick().click();
        headerPageMenu.getCartBtn().click({force: true});
        middlePageMenu.getCheckoutBtn().click();
        middlePageMenu.getConfirmOrder().click();
        middlePageMenu.getYourOrderHasBeenProccessedStatus().should("be.visible");
        
    });

});
