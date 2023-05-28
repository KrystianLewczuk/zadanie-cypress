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

    destinationInputField(){
        return cy.get('#directions-searchbox-0 .tactile-searchbox-input')
    }

    destinationSearchButton(){
        return cy.get('#directions-searchbox-0 button[data-tooltip="Szukaj"]')
    }

    errorMessageNoHintsAvailable(){
        return cy.get('.fontBodyMedium[role="alert"] div ')
    }
}
export default MainPageLocators