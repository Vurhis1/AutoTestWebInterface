describe("API tests", () => {
  it("creates pet", () => {
    cy.request({
      url: "/",
      method: "POST",
      body: {
        id: 123456,
        name: "Test Dog",
        photoUrls: [],
        tags: [],
      },
    }).then((response) => {
      expect(response.status).to.be.eql(200);
      expect(response.body).to.be.eql({
        id: 123456,
        name: "Test Dog",
        photoUrls: [],
        tags: [],
      });

      cy.request(`/${response.body.id}`).then((response) => {
        expect(response.status).to.be.eql(200);
        expect(response.body).to.be.eql({
          id: 123456,
          name: "Test Dog",
          photoUrls: [],
          tags: [],
        });
      });
    });
  });

  it("put pet", () => {
    cy.request({
      url: "/",
      method: "PUT",
      body: {
        id: 123456,
        name: "Doberman",
        photoUrls: [],
        tags: [],
      },
    }).then((response) => {
      expect(response.status).to.be.eql(200);
      expect(response.body).to.be.eql({
        id: 123456,
        name: "Doberman",
        photoUrls: [],
        tags: [],
      });

      cy.request(`/${response.body.id}`).then((response) => {
        expect(response.status).to.be.eql(200);
        expect(response.body).to.be.eql({
          id: 123456,
          name: "Doberman",
          photoUrls: [],
          tags: [],
        });
      });
    });
  });

  it("delete pet", () => {
    cy.request({
      url: "/123456",
      method: "DELETE",
      body: {
        code: 200,
        type: "unknown",
        message: "Pet is delete",
      },
    }).then((response) => {
      expect(response.status).to.be.eql(200);
    });
  });
});
