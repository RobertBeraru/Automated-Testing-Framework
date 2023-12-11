class dropDownMenus {
  getHomeMenuBtn() {
    return cy.get("ul.nav-pills.categorymenu > li:nth-child(1) > a");
  }
  getApparelAccesoriesMenuBtn() {
    return cy.get("ul.nav-pills.categorymenu > li:nth-child(2) > a");
  }
  getMakeupMenuBtn() {
    return cy.get("ul.nav-pills.categorymenu > li:nth-child(3) > a");
  }
  getSkinCareMenuBtn() {
    return cy.get("ul.nav-pills.categorymenu > li:nth-child(4) > a");
  }
  getFragranceMenuBtn() {
    return cy.get("ul.nav-pills.categorymenu > li:nth-child(5) > a");
  }
  getMenMenuBtn() {
    return cy.get("ul.nav-pills.categorymenu > li:nth-child(6) > a");
  }
  getHairCareMenuBtn() {
    return cy.get("ul.nav-pills.categorymenu > li:nth-child(7) > a");
  }
  getBooksMenuBtn() {
    return cy.get("ul.nav-pills.categorymenu > li:nth-child(8) > a");
  }
  getSpecialOffers_HomeMenuBtn() {
    return cy.get("#main_menu > li:nth-child(1) > a");
  }
  getAccountBtn() {
    return cy.get("#main_menu > li:nth-child(2) > a");
  }
  getLogin_AccountDropMenuBtn() {
    return cy.get(`#main_menu li[data-id="menu_account"] a.sub.menu_login`);
  }
  getCheckYourOrder_AccountDropMenuBtn() {
    return cy.get(`#main_menu li[data-id="menu_account"] a.sub.menu_order`);
  }
  getCartBtn() {
    return cy.get("ul#main_menu > li:nth-child(3) > a");
  }
  getCheckoutBtn() {
    return cy.get("ul#main_menu > li:nth-child(4) > a");
  }
  getShoesBtn() {
    return cy.get ("div[class='subcategories'] li[class='current'] a")
  }

}
export default new dropDownMenus();
