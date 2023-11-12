const validEmail = "RikTan70211@stud.noroff.no";
const validPassword = "testingpassword";

describe('Login and Access Profile', () => {

  it('should log in and access the user profile', () => {
    cy.visit("/");
    cy.get("#registerModal").find("button.btn-close").wait(500).click();
    cy.get("header").find('button[data-auth="login"]').click();
    cy.get("#loginForm").wait(500);
    cy.get("#loginEmail").type(validEmail);
    cy.get("#loginPassword").type(validPassword);
    cy.get("button[type=submit]").contains("Login").wait(200).click();
    cy.url().should("include", "profile");
  });
});
