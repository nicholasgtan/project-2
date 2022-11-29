describe("My First Test", () => {
  context("720p resolution", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1280, 720);
    });

    it('Find and click "Teams"', () => {
      cy.visit("https://valorant-agents-p2.vercel.app");

      cy.contains("Team").click();

      cy.url().should("include", "/team");
    });

    it("Find and click agent icons", () => {
      cy.visit("https://valorant-agents-p2.vercel.app");

      cy.get(".icon:first").should("be.visible").click();

      cy.url().should("include", "/agent/");

      cy.contains("Back").click();
    });
  });
});
