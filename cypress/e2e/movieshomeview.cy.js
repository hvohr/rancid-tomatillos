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


describe('User should be able to go to individual movie info, have that render properly, and come back to movies view', () => {
  it('User should be able to click an image and be transported to movie info view', () => {
    cy.get("img")
    .first()
    .click()
    .url()
    //This needs to be changed after implementing router//
    .should('include', 'http://localhost:3000/')
    //This needs to be changed after implementing router//
  })
  it('User should see correct movie info and correct elements containing those details', () => {
    cy.get("img")
    .first()
    .click()
    .get("h1")
    .contains("Rancid Tomatillos")
    .get('.title')
    .contains('h2', 'Black Adam')
    .get('.rating')
    .contains('h2', '4')
    .get('.release')
    .contains('h2', 'Release Date: 2022-10-19')
    .get('.movie-card')
    .invoke('attr', 'src')
    .should('eq', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
    .get('.movie-card')
    .should('be.visible')
  })
})
