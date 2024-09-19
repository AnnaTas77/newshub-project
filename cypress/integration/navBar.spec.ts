describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("the navbar is visible on the home page", () => {
    cy.get('[data-test="navbar"]').should("be.visible");
  });

  it("successfully loads the Home Page", () => {
    cy.contains("Home").click();
    cy.url().should("include", "/");
  });

  it("navigates to the Admin page", () => {
    cy.contains("Admin").click();
    cy.url().should("include", "/admin");
  });

  it("contains a clickable logo that navigates to the home page", () => {
    cy.get('[data-test="logo-button"]').should("be.visible");
    cy.get('[data-test="logo"]').should("be.visible");
    cy.get('[data-test="logo-button"]').click();
    cy.url().should("include", "/");
  });
});
