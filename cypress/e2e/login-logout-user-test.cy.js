import headerPageMenu from "../pages/header-page.menu";
import middlePageMenu from "../pages/middle-page-menu";
const loginUser = "Roslyn.Walker";
const loginPassword = "T_xY89JtnzbYLO9";

const baseURL = "https://automationteststore.com/";
describe("Login/Logout user test suite", () => {
  it("Login user test", () => {
    cy.visit(baseURL);
    headerPageMenu.getLoginOrRegisterBtn().click();
    middlePageMenu
      .getLoginNameFieldReturningCustomer()
      .type(loginUser, { delay: 0 });
    middlePageMenu
      .getLoginPasswordFieldReturningCustomer()
      .type(loginPassword, { delay: 0 });
    middlePageMenu.getLoginBtn().click();
    headerPageMenu.getWelcomeBack().should("be.visible");
  });
  it("Logout user from the account dashbord test", () => {
    cy.login();
    middlePageMenu.getLogoffDashbordBtn().click();
    cy.get(".mb40")
      .contains(
        "You have been logged off your account. It is now safe to leave the computer."
      )
      .should("be.visible");
  });
  it("Logout user from the dropdown menu test", () => {
    cy.login();
    cy.visit(baseURL);
    headerPageMenu.getWelcomeBack().trigger("mouseover");
    middlePageMenu.getLogoffDropDownMenuBtn().click();
    cy.get(".mb40")
      .contains(
        "You have been logged off your account. It is now safe to leave the computer."
      )
      .should("be.visible");
  });
});
