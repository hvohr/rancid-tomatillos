beforeEach(() => {
  cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 200,
    fixture: "moviesmock.json"
  })
  .as('home')
  .visit("http://localhost:3000/")
})

describe('Movies home should render properly', () => {
  it("should have a proper header", () => {
    cy.wait('@home')
    .get("h1")
    .contains("Rancid Tomatillos")
  
  });
  it("should have a collection of movies", () => {
    cy.wait('@home')
    .get('.front-movie-card')
    .should("have.length", 12);
  });
  it("the img element should be visible for particular movies", () => {
    cy.wait('@home')
    .get('img[title="Black Adam"]')
    .should('be.visible')
    .get('img[title="X"]')
    .should('be.visible')
    .get('.title-logo')
    .should('be.visible')
  });
});



