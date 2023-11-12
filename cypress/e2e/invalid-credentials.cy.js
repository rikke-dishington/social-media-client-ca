const invalidEmail = "invalidemail@stud.noroff.no";
const invalidPassword = "invalidtestingpassword";

describe('Invalid Login Form Submission', () => {
  it('should display an error message for invalid credentials', () => {
    cy.visit("/");
    cy.get("#registerModal").find("button.btn-close").wait(500).click();
    cy.get("header").find('button[data-auth="login"]').click();
    cy.get("#loginForm").wait(500);
    cy.get("#loginEmail").type(invalidEmail);
    cy.get("#loginPassword").type(invalidPassword);
    cy.get("button[type=submit]").contains("Login").wait(200).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
    cy.url().should("not.include", "profile");
  });
});
