const baseURL = "https://automationteststore.com/";
import middlePageMenu from "../pages/middle-page-menu";
import headerDropdownsMenu from "../pages/header-dropdowns.menu";
import "cypress-real-events/support";

describe('Testing the dropdowns menus from the "APPAREAL & ACCESSORIES" tab', () => {
  beforeEach(() => {
    cy.visit(baseURL);
    headerDropdownsMenu.getApparelAccesoriesMenuBtn().realHover("mouse");
  });
  it('Test "Shoes" tab', () => {
    headerDropdownsMenu.getShoesBtn().click();
    middlePageMenu.getShoesStatus().should("be.visible");
  });
  it('Test "T-Shirts" tab', () => {
    headerDropdownsMenu.getTShirtsBtn().click();
    middlePageMenu.getTShirtsStatus().should("be.visible");
  });
});
