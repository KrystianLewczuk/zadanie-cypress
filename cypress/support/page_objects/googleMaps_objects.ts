/// <reference types="cypress" />

class MainPageLocators {

    inputField() {
        return cy.get('#searchboxinput')
      }
    
    searchButton(){
        return cy.get('#searchbox-searchbutton')
    }
    
    resultHeader(){
        return cy.get('h1:nth-child(2)')
    }

    directions(){
        return cy.get('[data-value="Wyznacz trasę"]')
    }

    destinationSetOnLondon(){
        return cy.get('[aria-label="Miejsce docelowe Londyn, Wielka Brytania"]')
    }

    shareButton(){
        return cy.get('[data-value="Udostępnij"]')
    }

    popUpWindow(){
        return cy.get('.pane-open h1')
    }

    errorMessage(){
        return cy.get('[role="main"] i')
    }
}
export default MainPageLocators