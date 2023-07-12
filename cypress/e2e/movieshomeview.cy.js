beforeEach(() => {
  cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 200,
    fixture: "moviesmock.json"
  })
  .visit("http://localhost:3000/")
});

describe('Movies home should render properly', () => {
  it("should have a proper header", () => {
    cy.get("h1").contains("Rancid Tomatillos")
  
  });

  it("should have a collection of movies", () => {
    cy.get("main")
    .find("img")
    .should("have.length", 40);
  });
  it("should have a collection of movies in proper order", () => {
    cy.get("img")
    .last()
    .invoke('attr', 'src')
    .should('eq', 'https://image.tmdb.org/t/p/original//woTQx9Q4b8aO13jR9dsj8C9JESy.jpg')
    .get("img")
    .first()
    .invoke('attr', 'src')
    .should('eq', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
  });
  it("the img element should be visible for particular movies", () => {
    cy.get("img")
    .last()
    .should('be.visible')
    .get("img")
    .first()
    .should('be.visible')
  });
});



