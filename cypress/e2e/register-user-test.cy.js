const { faker } = require("@faker-js/faker");
import headerPageMenu from "../pages/header-page.menu";

import middlePageMenu from "../pages/middle-page-menu";
const baseURL = "https://automationteststore.com/";
const password = faker.internet.password();
const email = faker.internet.email();
describe("Register user test suite", () => {
  it("Register user test", () => {
    cy.visit(baseURL);
    headerPageMenu.getLoginOrRegisterBtn().click();
    middlePageMenu.getRegisterAccountContinueBtn().click();
    middlePageMenu
      .getFirstNameField()
      .type(faker.person.firstName(), { delay: 0 });
    middlePageMenu
      .getLastNameField()
      .type(faker.person.lastName(), { delay: 0 });
    middlePageMenu.getEMailField().type(email, { delay: 0 });
    middlePageMenu.getTelephoneField().type(faker.phone.number(), { delay: 0 });
    middlePageMenu.getFaxField().type(faker.phone.number(), { dealy: 0 });
    middlePageMenu.getCompanyField().type(faker.company.name(), { delay: 0 });
    middlePageMenu
      .getAddres1Field(1)
      .type(faker.location.streetAddress(), { delay: 0 });
    middlePageMenu
      .getAddres1Field(2)
      .type(faker.location.secondaryAddress(), { delay: 0 });
    middlePageMenu.getCityField().type(faker.location.city(), { delay: 0 });
    middlePageMenu.getCountryField().then((dropdown) => {
      const options = dropdown.find("option");
      const randomIndex = Cypress._.random(1, options.length - 1);
      const randomItem = options.eq(randomIndex).text();
      middlePageMenu.getCountryField().select(randomItem);
    });
    middlePageMenu
      .getZipCodeField()
      .type(faker.location.zipCode(), { delay: 0 });
    middlePageMenu.getRegionStateField().then((dropdown) => {
      const optionss = dropdown.find("option");
      const randomIndexs = Cypress._.random(1, optionss.length - 1);
      const randomItemss = optionss.eq(randomIndexs).text();
      middlePageMenu.getRegionStateField().select(randomItemss);
    });
    middlePageMenu
      .getLoginNameField()
      .type(faker.internet.userName(), { dekay: 0 });
    middlePageMenu.getPasswordField().type(password, { delay: 0 });
    middlePageMenu.getPasswordConfirmField().type(password, { delay: 0 });
    middlePageMenu
      .getSubscribeYesNoBtn(faker.number.int({ min: 0, max: 1 }))
      .click();
    middlePageMenu.getPrivacyPolicyBtn().click();
    middlePageMenu.getRegisterAccountContinueBtn().click();

    cy.get(".maintext").should("contain", " Your Account Has Been Created!");
  });
});
