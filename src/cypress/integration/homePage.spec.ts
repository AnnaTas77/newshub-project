describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a list of articles", () => {
    cy.get('[data-test="articles-list"]').should("exist");
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

  it("checks if each article has image, category, title, author and date (updatedAt)", () => {
    cy.get('[data-test="article-image"]').should("exist");
    cy.get('[data-test="article-category"]').should("exist");
    cy.get('[data-test="article-title"]').should("exist");
    cy.get('[data-test="article-author"]').should("exist");
    cy.get('[data-test="article-time-updated"]').should("exist");
  });

  it("checks that when the first article card is clicked, that it navigates to the single page for that specific article", () => {
    cy.get('[data-test="article-link"]').should("exist");
    // Select on the first article card and visit that url
    cy.get('[data-test="article-link"]')
      .first()
      .invoke("attr", "href")
      .then((href) => {
        cy.visit(href);
      });
  });
});
