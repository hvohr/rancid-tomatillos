beforeEach(() => {
  cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 200,
    fixture: "moviesmock.json"
  })
  .visit("http://localhost:3000/")
});

describe('User should be able to go to individual movie info, have that render properly, and come back to movies view', () => {
  it('User should be able to click an image and be transported to movie info view', () => {
    cy.get("img")
    .first()
    .click()
    .url('/436270')
    .should('include', 'http://localhost:3000')

  })
  it('User should see correct movie info and correct elements containing those details', () => {
    cy.get("img")
    .first()
    .click()
    .get("h1")
    .contains("Rancid Tomatillos")
    cy.get('.induvidual-title')
    .first()
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
  it('User should be able to click the button and go back to home-movies view', () => {
    cy.get("img")
    .first()
    .click()
    .url()
    .get('.nav-home-button')
    .click()
    .url()
    .should('include', 'http://localhost:3000/home')    
  })
});

