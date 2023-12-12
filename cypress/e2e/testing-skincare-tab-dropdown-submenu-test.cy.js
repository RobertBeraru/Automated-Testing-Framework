const baseURL = "https://automationteststore.com/";
import middlePageMenu from "../pages/middle-page-menu";
import headerDropdownsMenu from "../pages/header-dropdowns.menu";
import "cypress-real-events/support";

describe('Testing the dropdowns menus from the "SKINCARE" tab', () => {
  beforeEach(() => {
    cy.visit(baseURL);
    headerDropdownsMenu.getSkinCareMenuBtn().realHover("mouse");
  });
  it('Test "SKINCARE - Eyes" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(4, 1).click();
    middlePageMenu.getEyesStatus().should("be.visible");
  });
  it('Test "SKINCARE - Face" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(4, 2).click();
    middlePageMenu.getValidationOnText("Face").should("be.visible");
  });
  it('Test "SKINCARE - Gift Ideas & Sets" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(4, 3).click();
    middlePageMenu
      .getValidationOnText("Gift Ideas & Sets")
      .should("be.visible");
  });
  it('Test "SKINCARE - Hands & Nails" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(4, 4).click();
    middlePageMenu.getValidationOnText("Hands & Nails").should("be.visible");
  });
  it('Test "SKINCARE - Sun" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(4, 5).click();
    middlePageMenu.getValidationOnText("Sun").should("be.visible");
  });
});
