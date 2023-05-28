import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import MainPageLocators from "../page_objects/googleMaps_objects";

const loc = new MainPageLocators()

Given("I go to Maps homepage", () => {
  cy.visit('/')
  cy.get("button").contains("Zaakceptuj wszystko").click({ force: true })
  cy.visit('https://www.google.com/maps')
  // simply because going straight on maps is causing inifinite page load event after redirect
});

When("I type value {string} into input field", (value: string) => {
  loc.inputField().should("be.enabled").clear().type(value)
});

When("I click search button", () => {
  loc.searchButton().click()
});

Then("Header for result should have value {string}", (value: string) => {
  loc.resultHeader().should("be.visible").contains(value)
});

When("I click Directions button", () => {
  loc.directions().should("be.visible").click({ force: true })
});

Then("Destination should be filled with Londyn, Wielka Brytania", () => {
  loc.destinationSetOnLondon().should("be.visible")
});

When("I click share button", () => {
  loc.shareButton().should("be.visible").click({ force: true })
});

Then("Pop-up with link to location is opened", () => {
  loc.popUpWindow().should("be.visible").contains("Udostępnij")
});

Then("I verify the error message is shown", () => {
  loc.errorMessage().should("be.visible").contains("aaaabbcceeswas")
})
