const baseURL = "https://automationteststore.com/";
import middlePageMenu from "../pages/middle-page-menu";
import headerDropdownsMenu from "../pages/header-dropdowns.menu";
import "cypress-real-events/support";

describe('Testing the dropdowns menus from the "HAIR CARE" tab', () => {
  beforeEach(() => {
    cy.visit(baseURL);
    headerDropdownsMenu.getHairCareMenuBtn().realHover("mouse");
  });
  it('Test "Hair Care - Conditioner" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(7, 1).click();
    middlePageMenu.getValidationOnText("Conditioner");
  });
  it('Test "Hair Care - Shampoo" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(7, 2).click();
    middlePageMenu.getValidationOnText("Shampoo");
  });
});
