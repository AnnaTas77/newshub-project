describe("Create Article Form", () => {
  beforeEach(() => {
    // Visit the page where the form is located
    cy.visit("/create-article");
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

  it("should submit the form successfully and display the new article", () => {
    // Fill in the form fields
    cy.get('input[name="category"]').check("tech"); // Select a category
    cy.get('input[name="title"]').type("Test Article Title");
    cy.get('input[name="author"]').type("Test Author");
    cy.get('textarea[name="content"]').type(
      "This is the content of the test article."
    );
    cy.get('input[name="image"]').type("test-image.jpg");

    // Submit the form
    cy.get("form").submit();

    // Check if the user is redirected to the admin page
    cy.url().should("include", "/admin");

    // Check for the presence of the new article
    cy.contains("Test Article Title").should("be.visible"); // Check for the title
    cy.contains("Test Author").should("be.visible"); // Check for the author
  });
});
