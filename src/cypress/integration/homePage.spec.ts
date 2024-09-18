describe("Home Page", () => {
  it("Visits NewHub", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Home").click();
    cy.url().should("include", "/");
    cy.contains("Admin").click();
    cy.url().should("include", "/admin");
  });
});
