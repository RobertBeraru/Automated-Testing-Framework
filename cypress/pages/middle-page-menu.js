class MiddlePageMenu {
  getRegisterAccountContinueBtn() {
    return cy.get(".btn.btn-orange.pull-right").contains("Continue");
  }
  getLoginNameFieldReturningCustomer() {
    return cy.get("#loginFrm_loginname");
  }
  getLoginPasswordFieldReturningCustomer() {
    return cy.get("#loginFrm_password");
  }
  getSuccessStatus() {
    return cy.get(".alert.alert-success");
  }
  getLoginBtn() {
    return cy.get(".btn.btn-orange.pull-right").contains("Login");
  }
  getFirstNameField() {
    return cy.get("#AccountFrm_firstname");
  }
  getLastNameField() {
    return cy.get("#AccountFrm_lastname");
  }
  getEMailField() {
    return cy.get("#AccountFrm_email");
  }
  getTelephoneField() {
    return cy.get("#AccountFrm_telephone");
  }
  getFaxField() {
    return cy.get("#AccountFrm_fax");
  }
  getCompanyField() {
    return cy.get("#AccountFrm_company");
  }
  getAddres1Field(number) {
    return cy.get(`#AccountFrm_address_${number}`);
  }
  getCityField() {
    return cy.get("#AccountFrm_city");
  }
  getRegionStateField() {
    return cy.get("#AccountFrm_zone_id");
  }
  getZipCodeField() {
    return cy.get("#AccountFrm_postcode");
  }
  getCountryField() {
    return cy.get("#AccountFrm_country_id.form-control");
  }
  getLoginNameField() {
    return cy.get("#AccountFrm_baseURLloginname");
  }
  getPasswordField() {
    return cy.get("#AccountFrm_password");
  }
  getPasswordConfirmField() {
    return cy.get("#AccountFrm_confirm");
  }
  getSubscribeYesNoBtn(number) {
    return cy.get(`#AccountFrm_newsletter${number}`);
  }
  getPrivacyPolicyBtn() {
    return cy.get("#AccountFrm_agree");
  }
  getEditAccountDetailsBtn() {
    return cy.get("i[class='fa fa-edit']");
  }
  getAccountLogoutStatus() {
    return cy.get(".maintext").contains("Account Logout");
  }
  getLogoffDashbordBtn() {
    return cy.get("div[id='maincontainer'] li:nth-child(10) a:nth-child(1)");
  }
  getLogoffDropDownMenuBtn() {
    return cy.get(".fa.fa-lock.fa-fw");
  }
  getSkinSheenBronzerStick() {
    return cy.get('#featured.row.mt20 a[data-id="50"].productcart');
  }
  getCheckoutBtn() {
    return cy.get("#cart_checkout1");
  }
  getConfirmOrder() {
    return cy.get("#checkout_btn");
  }
  getYourOrderHasBeenProccessedStatus() {
    return cy.get(".maintext").contains("Your Order Has Been Processed!");
  }
  getMenuText() {
    return cy.contains(
      ".contentpanel .welcome_msg h4",
      "Welcome to the Automation Test Store!"
    );
  }
  getApparealAccessoriesText() {
    return cy.get(".maintext").contains("Apparel & accessories");
  }
  getMakeupText() {
    return cy.get(".maintext").contains("Makeup");
  }
  getSkinCareText() {
    return cy.get(".maintext").contains("Skincare");
  }
  getFragranceText() {
    return cy.get(".maintext").contains("Fragrance");
  }
  getMenuText() {
    return cy.get(".maintext").contains("Men");
  }
  getHairCareText() {
    return cy.get(".maintext").contains("Hair Care");
  }
  getBooksText() {
    return cy.get(".maintext").contains("Books");
  }
  getAccountLoginStatus() {
    return cy.get(".maintext").contains("Account");
  }
  getOrderDetailsStatus() {
    return cy.get(".maintext").contains("Order Details");
  }
  getShoppingCartStatus() {
    return cy.get(".maintext").contains("Shopping Cart");
  }
  getSpcialOffersStatus() {
    return cy.get(".maintext").contains("Special Offers");
  }
  getShoppingCartStatus() {
    return cy.get(".maintext").contains("Shopping Cart");
  }
}
export default new MiddlePageMenu();
