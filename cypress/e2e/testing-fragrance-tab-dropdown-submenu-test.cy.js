const baseURL = "https://automationteststore.com/";
import middlePageMenu from "../pages/middle-page-menu";
import headerDropdownsMenu from "../pages/header-dropdowns.menu";
import "cypress-real-events/support";

describe('Testing the dropdowns menus from the "FRAGRANCE" tab', () => {
  beforeEach(() => {
    cy.visit(baseURL);
    headerDropdownsMenu.getFragranceMenuBtn().realHover("mouse");
  });
  it('Test "Fragrance - Men" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(5, 1).click();
    middlePageMenu.getValidationOnText("Men");
  });
  it('Test "Fragrance - Women" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(5, 2).click();
    middlePageMenu.getValidationOnText("Women");
  });
});
