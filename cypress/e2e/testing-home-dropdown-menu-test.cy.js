const baseURL = "https://automationteststore.com/";
import middlePageMenu from "../pages/middle-page-menu";
import headerDropdownsMenu from "../pages/header-dropdowns.menu";
import "cypress-real-events/support";

describe('Testing the dropdowns menus from the "HOME" tab', () => {
  beforeEach(() => {
    cy.visit(baseURL);
    headerDropdownsMenu.getHomeMenuBtn().realHover("mouse");
  });
  it('Test "Specials" tab', () => {
    headerDropdownsMenu.getSpecialOffers_HomeMenuBtn().click();
    middlePageMenu.getSpcialOffersStatus().should("be.visible");
  });
  it('Test "Account" tab', () => {
    headerDropdownsMenu.getAccountBtn().click();
    middlePageMenu.getAccountLoginStatus().should("be.visible");
  });
  it('Test "Login" submenu from "Account" tab', () => {
    headerDropdownsMenu.getAccountBtn().realHover("mouse");
    headerDropdownsMenu.getLogin_AccountDropMenuBtn().click();
    middlePageMenu.getAccountLoginStatus().should("be.visible");
  });
  it('Test "Check Your Order" submenu from "Account" tab', () => {
    headerDropdownsMenu.getAccountBtn().realHover("mouse");
    headerDropdownsMenu.getCheckYourOrder_AccountDropMenuBtn().click();
    middlePageMenu.getOrderDetailsStatus().should("be.visible");
  });
  it('Test "Cart" tab', () => {
    headerDropdownsMenu.getCartBtn().click();
    middlePageMenu.getShoppingCartStatus().should("be.visible");
  });
  it('Test "Checkout" tab', () => {
    headerDropdownsMenu.getCheckoutBtn().click();
    middlePageMenu.getShoppingCartStatus().should("be.visible");
  });
});
