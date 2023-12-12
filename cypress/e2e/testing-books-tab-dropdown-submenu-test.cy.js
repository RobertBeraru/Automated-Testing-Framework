const baseURL = "https://automationteststore.com/";
import middlePageMenu from "../pages/middle-page-menu";
import headerDropdownsMenu from "../pages/header-dropdowns.menu";
import "cypress-real-events/support";

describe('Testing the dropdowns menus from the "BOOKS" tab', () => {
  beforeEach(() => {
    cy.visit(baseURL);
    headerDropdownsMenu.getBooksMenuBtn().realHover("mouse");
  });
  it('Test "Books - Audio CD" tab', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(8, 1).click();
    middlePageMenu.getValidationOnText("Audio CD");
  });
  it('Test "Books - Paperback"', () => {
    headerDropdownsMenu.getDropdownMenuTabBtn(8, 2).click();
    middlePageMenu.getValidationOnText("Paperback");
  });
});
