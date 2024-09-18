describe("Admin Page", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("checks if the create article button is visible", () => {
    cy.get('[data-test="create-button"]').should("be.visible");
  });

  it("displays a list of articles", () => {
    cy.get('[data-test="articles-list"]').should("be.visible");
    cy.get('[data-test="articles-list"]').should("have.length.greaterThan", 0);
  });

  it("checks that each article has title, author and dates (updatedAt and createdAt), and edit and delete buttons", () => {
    cy.get('[data-test="article-title"]').should("be.visible");
    cy.get('[data-test="article-author"]').should("be.visible");
    cy.get('[data-test="article-time-updated"]').should("be.visible");
    cy.get('[data-test="article-time-created"]').should("be.visible");
    cy.get('[data-test="edit-button"]').should("be.visible");
    cy.get('[data-test="delete-button"]').should("be.visible");
  });
});
