beforeEach(() => {
  cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 200,
    fixture: "moviesmock.json"
  })
  .visit("http://localhost:3000/")
  cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
    statusCode: 200,
    fixture: "ba.json"
  })
  cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/760104', {
    statusCode: 200,
    fixture: "x.json"
  })
});

describe('User should be able to go to individual movie info, have that render properly, and come back to movies view', () => {
  it('User should be able to click an image and be transported to movie info view', () => {
    // fetchSingle()
    cy.get('img[title="Black Adam"]')
    .click()
    .url()
    .should('include', 'http://localhost:3000/436270')

  })
  it('User should see correct movie info and correct elements containing those details', () => {
    cy.get('img[title="Black Adam"]')
    .click()
    .get("h1")
    .contains("Rancid Tomatillos")
    .get('.induvidual-title')
    .contains('h2', 'Black Adam')
    .get('.tagline')
    .contains('h3', 'The world needed a hero. It got Black Adam')
    .get('.overview')
    .contains('h3', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    .get('.runtime')
    .contains('h2', '125')
    .get('.rating')
    .contains('h2', '4')
    .get('.release')
    .contains('h2', 'Release Date: 2022-10-19')
    .get('.genre')
    .contains('h2', 'Action')
    .get('.movie-card')
    .invoke('attr', 'src')
    .should('eq', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
    .get('.movie-card')
    .should('be.visible')
  })
  it('User should be able to click the button and go back to home-movies view', () => {
    cy.get('img[title="Black Adam"]')
    .click()
    .url()
    .should('include', 'http://localhost:3000/436270')
    .get('.nav-home-button')
    .click()
    .url()
    .should('include', 'http://localhost:3000/home')
    .get('img[title="X"]')
    .click()
    .url()
    .should('include', 'http://localhost:3000/760104')
    .get('.nav-home-button')
    .click()
    .url()
    .should('include', 'http://localhost:3000/home')   
  })
});

