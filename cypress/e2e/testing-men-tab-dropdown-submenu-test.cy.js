const baseURL = "https://automationteststore.com/";
import middlePageMenu from "../pages/middle-page-menu";
import headerDropdownsMenu from "../pages/header-dropdowns.menu";
import "cypress-real-events/support";

describe('Testing the dropdowns menus from the "MEN" tab', () => {
  beforeEach(() => {
    cy.visit(baseURL);
    headerDropdownsMenu.getMenMenuBtn().realHover("mouse");
  });
  it('Test "Men - Body&Shower" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(6, 1).click();
    middlePageMenu.getValidationOnText("Body & Shower");
  });
  it('Test "Men - Fragrance Sets" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(6, 2).click();
    middlePageMenu.getValidationOnText("Fragrance Sets");
  });
  it('Test "Men - Pre-Shave & Shaving" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(6, 3).click();
    middlePageMenu.getValidationOnText("Pre-Shave & Shaving");
  });
  it('Test "Men - Skincare" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(6, 4).click();
    middlePageMenu.getValidationOnText("Skincare");
  });
});
