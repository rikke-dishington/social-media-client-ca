const validEmail = "RikTan70211@stud.noroff.no";
const validPassword = "testingpassword";

describe("Logout Functionality and clear local storage token value", () => {

  it("should allow the user to log out", () => {
    cy.visit("/");
    cy.get("#registerModal").find("button.btn-close").wait(500).click();
    cy.get("header").find('button[data-auth="login"]').click();
    cy.get("#loginForm").wait(500);
    cy.get("#loginEmail").type(validEmail);
    cy.get("#loginPassword").type(validPassword);
    cy.get("button[type=submit]").contains("Login").wait(200).click();
    cy.wait(2000);
    cy.get('button[data-auth="logout"]').wait(500).click();
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});