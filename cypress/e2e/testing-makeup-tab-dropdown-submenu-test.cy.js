const baseURL = "https://automationteststore.com/";
import middlePageMenu from "../pages/middle-page-menu";
import headerDropdownsMenu from "../pages/header-dropdowns.menu";
import "cypress-real-events/support";

describe('Testing the dropdowns menus from the "MAKEUP" tab', () => {
  beforeEach(() => {
    cy.visit(baseURL);
    headerDropdownsMenu.getMakeupMenuBtn().realHover("mouse");
  });
  it('Test "Cheeks" tab', () => {
    headerDropdownsMenu.getMakeupTabBtn(1).click()
    middlePageMenu.getCheeksStatus().should("be.visible")
  });
  it('Test "Eyes" tab', () => {
    headerDropdownsMenu.getMakeupTabBtn(2).click();
    middlePageMenu.getEyesStatus().should("be.visible")
  });
  it('Test "Face" tab', () => {
    headerDropdownsMenu.getMakeupTabBtn(3).click();
    middlePageMenu.getFaceStatus().should("be.visible");
  });
  it('Test "Lips" tab', () => {
    headerDropdownsMenu.getMakeupTabBtn(4).click();
    middlePageMenu.getLipsStatus().should("be.visible");
  });
  it('Test "Nails" tab', () => {
    headerDropdownsMenu.getMakeupTabBtn(5).click();
    middlePageMenu.getNailsStatus().should("be.visible");
  });
  it('Test "Value Sets" tab', () => {
    headerDropdownsMenu.getMakeupTabBtn(6).click();
    middlePageMenu.getValueSetsStatus().should("be.visible");
    
  });
});
