describe("petstore api", () => {
  it("creates pet", () => {
    cy.request({
      url: "https://petstore.swagger.io/v2/pet",
      method: "POST",
      body: {
        id: 123456,
        name: "Test Dog",
        photoUrls: [],
      },
    }).then((response) => {
      expect(response.status).to.be.eql(200);
      expect(response.body).to.be.eql({
        id: 123456,
        name: "Test Dog",
        photoUrls: [],
        tags: [],
      });

      cy.request(`https://petstore.swagger.io/v2/pet/${response.body.id}`).then(
        (response) => {
          expect(response.status).to.be.eql(200);
          expect(response.body).to.be.eql({
            id: 123456,
            name: "Test Dog",
            photoUrls: [],
            tags: [],
          });
        }
      );
    });
  });
});
