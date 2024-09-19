// Contains UI tests for the Home Page

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a list of articles", () => {
    cy.get('[data-test="articles-list"]').should("be.visible");
    cy.get('[data-test="articles-list"]').should("have.length.greaterThan", 0);
  });

  it("checks if there is category section in the home page", () => {
    cy.get('[data-test="category-section"]').should("be.visible");
  });

  it("renders the category buttons correctly on the homepage", () => {
    const categories = [
      "latest",
      "culture",
      "sports",
      "tech",
      "economy",
      "climate",
    ];

    categories.forEach((category) => {
      cy.get('[data-test="category-section"]').contains(category);
    });
  });

  it("checks that latest category button is initially on focus", () => {
    cy.get('[data-test="category-section"]')
      .contains("latest")
      .should("have.class", "focused");
  });

  it("applies focused class to the clicked category button", () => {
    const categoryToTest = "climate";
    cy.get('[data-test="category-section"]').contains(categoryToTest).click();

    cy.get('[data-test="category-section"]')
      .contains(categoryToTest)
      .should("have.class", "focused");
  });

  it("checks if each article has image, category, title, author and date (updatedAt)", () => {
    cy.get('[data-test="article-image"]').should("be.visible");
    cy.get('[data-test="article-category"]').should("be.visible");
    cy.get('[data-test="article-title"]').should("be.visible");
    cy.get('[data-test="article-author"]').should("be.visible");
    cy.get('[data-test="article-time-updated"]').should("be.visible");
  });

  it("checks that when the first article card is clicked, that it navigates to the single page for that specific article", () => {
    cy.get('[data-test="article-link"]').should("exist");
    // Selects the first article card and visits that url
    cy.get('[data-test="article-link"]')
      .first()
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(href);
      });
  });
});
