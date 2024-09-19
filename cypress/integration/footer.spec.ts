describe("Footer Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the current year in the copyright section", () => {
    const currentYear = new Date().getFullYear();
    cy.get('[data-test="copy-right"]')
      .contains(`© ${currentYear} NewsHub`)
      .should("be.visible");
  });

  it("should display the copyright text", () => {
    cy.get("span").contains("All rights reserved.").should("be.visible");
  });

  it("should have social media links", () => {
    cy.get("a[href='https://twitter.com']").should("exist");
    cy.get("a[href='https://instagram.com']").should("exist");
    cy.get("a[href='https://youtube.com']").should("exist");
  });

  it("social media links should have the correct attributes", () => {
    // Use more specific selectors for the anchor tags in the footer
    cy.get("a[href='https://twitter.com']")
      .should("have.attr", "target", "_blank")
      .should("have.attr", "rel", "noopener noreferrer");

   
    cy.get("a[href='https://instagram.com']")
      .should("have.attr", "target", "_blank")
      .should("have.attr", "rel", "noopener noreferrer");

    cy.get("a[href='https://youtube.com']")
      .should("have.attr", "target", "_blank")
      .should("have.attr", "rel", "noopener noreferrer");
  });
});
