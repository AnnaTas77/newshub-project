describe("Edit Article Form", () => {
  beforeEach(() => {
    // Visit the edit article form for the first article
    cy.visit("/edit-article/1");
  });

  it("should display all form fields", () => {
    // Check that the category radio buttons are visible
    cy.get('input[name="category"][value="tech"]').should("be.visible");
    cy.get('input[name="category"][value="culture"]').should("be.visible");
    cy.get('input[name="category"][value="sports"]').should("be.visible");
    cy.get('input[name="category"][value="economy"]').should("be.visible");
    cy.get('input[name="category"][value="climate"]').should("be.visible");

    // Check that the title input is visible
    cy.get('input[name="title"]').should("be.visible");
    cy.get('input[name="author"]').should("be.visible");
    cy.get('textarea[name="content"]').should("be.visible");
    cy.get('input[name="image"]').should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");
  });
});
