import headerPageMenu from "../pages/header-page.menu";
import middlePageMenu from "../pages/middle-page-menu";
const { faker } = require("@faker-js/faker");

describe("Edit account first name test suite", () => {
    it('Edit first name test', () => {
        cy.login();
        headerPageMenu.getWelcomeBack().click();
        middlePageMenu.getEditAccountDetailsBtn().click();
        middlePageMenu.getFirstNameField().clear().type(faker.person.firstName());
        middlePageMenu.getRegisterAccountContinueBtn().click();
        middlePageMenu.getSuccessStatus().should("be.visible");
    });

});
