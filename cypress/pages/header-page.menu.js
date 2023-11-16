class HeaderPageMenu {
    getLoginOrRegisterBtn (){
        return cy.get('a').contains("Login or register");
    }
    getWelcomeBack(){
        return cy.get(".menu_text").contains("Welcome back");
    }
    getHomeBtn(){
        return cy.get("a").contains("Home");
    }
    getCartBtn(){
        return cy.get(".menu_text").contains("Cart")
    }
}

export default new HeaderPageMenu();