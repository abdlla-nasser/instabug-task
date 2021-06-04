// https://docs.cypress.io/api/introduction/api.html

// describe("My First Test", () => {
//   it("Visits the app root url", () => {
//     cy.visit("http://localhost:8080/");
//     cy.contains("h1", "Welcome to Your Vue.js + TypeScript App");
//   });
// });
it("Scenario 1 wrong Email", () => {
  cy.visit("http://localhost:8080/login");
  cy.get("#email").type("mohamed@instabug.co");
  cy.get("#password").type("1234567");
  cy.get("#submit").click();
  cy.contains("#error-box", "Email Not Found");
});
it("Scenario 2 Valid Email, wrong Password", () => {
  cy.visit("http://localhost:8080/login");
  cy.get("#email").type("mohamed@instabug.com");
  cy.get("#password").type("1234567");
  cy.get("#submit").click();
  cy.contains("#error-box", "Password is Incorrect");
});
it("Scenario 3 Valid Email, Valid Password", () => {
  cy.visit("http://localhost:8080/login");
  cy.get("#email").type("mohamed@instabug.com");
  cy.get("#password").type("12345678");
  cy.get("#submit").click();
  cy.location("pathname").should("eq", "/welcome");
});
it("Scenario 4 invalid Email, unfocus input, red message appears, textbox border is red", () => {
  cy.visit("http://localhost:8080/login");
  cy.get("#email").type("mohamed");
  cy.get("#password").type("12345678");
  cy.contains(".error-text", "Email isn't Valid");
});
