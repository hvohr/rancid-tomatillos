beforeEach(() => {
  cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 200,
    fixture: "moviesmock.json"
  })
  .visit("http://localhost:3000/")
});

describe('Movies home should be tested', () => {
  it("should have a proper header", () => {
    cy.get("h1").contains("Rancid Tomatillos")
  
  });
  
})


