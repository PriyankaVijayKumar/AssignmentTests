import { faker } from "@faker-js/faker";
import constants from "../fixtures/constants.json";

Cypress.Commands.add("login", (userData) => {
  const { email, password } = userData;
  const {
    welcomeButton,
    signinEmail,
    signinPassword,
    signinButton,
    signinLink,
  } = constants.locators;

  cy.visit(constants.dev.siteUrl);
  cy.title().should("eq", constants.validation.homePageTitle);
  cy.get(signinLink).contains(constants.validation.signinLogin).click();
  cy.title().should("eq", constants.validation.loginTitle);
  cy.get(signinEmail).type(email);
  cy.get(signinPassword).type(password);
  cy.get(signinButton).click();
});

Cypress.Commands.add("createAccount", (userData) => {
  const {
    firstName,
    lastName,
    createEmail,
    createPassword,
    confirmPassword,
    createAccount,
    change,
    signoutButton,
  } = constants.locators;

  cy.visit(constants.dev.siteUrl);
  cy.title().should("eq", constants.validation.homePageTitle);
  cy.contains(constants.validation.createAccText).click();
  cy.title().should("eq", constants.validation.createAccountTitle);
  cy.get(firstName).type(faker.name.firstName());
  cy.get(lastName).type(faker.name.lastName());
  cy.get(createEmail).type(faker.internet.email());
  cy.get(createPassword).type(constants.validUser.password);
  cy.get(confirmPassword).type(constants.validUser.password);
  cy.get(createAccount).click();
  cy.title().should("eq", constants.validation.myAccountTitle);
  cy.reload();
  cy.get(change)
    .contains(constants.validation.options)
    .click({ force: true, multiple: true });
  cy.get(signoutButton)
    .contains(constants.validation.signoutText)
    .click({ force: true, multiple: true });
});
