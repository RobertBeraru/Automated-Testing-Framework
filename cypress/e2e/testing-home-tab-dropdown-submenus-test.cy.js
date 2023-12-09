const baseURL = "https://automationteststore.com/";
import middlePageMenu from "../pages/middle-page-menu";
import headerDropdownsMenu from "../pages/header-dropdowns.menu";
import "cypress-real-events/support"
describe('Testing every dropdown menu from the "HOME" section', () => {
  beforeEach(() => {
    cy.visit(baseURL);
  });
  it.only('Testing "HOME" dropdown menu', () => {
    headerDropdownsMenu.getHomeMenuBtn().click();
    cy.contains('.contentpanel .welcome_msg h4', 'Welcome to the Automation Test Store!').should('have.css', 'color', 'rgb(209, 54, 20)');
    headerDropdownsMenu.getHomeMenuBtn().realHover('mouse');
    headerDropdownsMenu.getSpecialOffers_HomeMenuBtn().click();
    cy.get(".maintext").contains("Special Offers")
});
  it('"Testing "APPAREL & ACCESSORIES" dropdown menu', () => {
    headerDropdownsMenu.getApparelAccesoriesMenuBtn().click();
    middlePageMenu.getApparealAccessoriesText().should("be.visible");
  });
  it('Testing "MAKEUP" dropdown menu', () => {
    headerDropdownsMenu.getMakeupMenuBtn().click();
    middlePageMenu.getMakeupText().should("be.visible");
  });
  it('Testing "SKINCARE" dropdown menu', () => {
    headerDropdownsMenu.getSkinCareMenuBtn().click();
    middlePageMenu.getSkinCareText().should("be.visible");
  });
  it('Testing "FRAGRANCE" dropdown menu', () => {
    headerDropdownsMenu.getFragranceMenuBtn().click();
    middlePageMenu.getFragranceText().should("be.visible");
  });
  it('Testing "MEN" dropdown menu', () => {
    headerDropdownsMenu.getMenMenuBtn().click();
    middlePageMenu.getMenuText().should("be.visible");
  });
  it(`Testing "HAIR CARE" dropdown menu`, () => {
    headerDropdownsMenu.getHairCareMenuBtn().click();
    middlePageMenu.getHairCareText().should("be.visible");
  });
  it('Testing "BOOKS" dropdown menu', () => {
    headerDropdownsMenu.getBooksMenuBtn().click();
    middlePageMenu.getBooksText().should("be.visible");
  });
});
