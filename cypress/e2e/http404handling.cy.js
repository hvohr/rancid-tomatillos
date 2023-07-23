
describe('The user should be notified that connection failed on the home page when there is a 404 error.', () => {

  it("The user should be notified that connection failed.", () => {

    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 200,
    fixture: "moviesmock.json"
    }).as('200')
    .visit("http://localhost:3000/")

    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 404,
    fixture: "moviesmock.json"
    })
    .as('e404h')
    
    cy.wait('@e404h')
    .get('.error-logo')
    .should('be.visible')
    .get('.error-message')
    .contains('p', 'We apologize! Error: Not Found. Please try again later.')
    .should('be.visible');
  });
});

describe('The user should be notified that connection failed on the movie info page when there is a 404 error.', () => {
  it("The user should be notified that connection failed.",  () => {

    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: "moviesmock.json"
    }).as('200')
    .visit("http://localhost:3000/")
  
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 404,
      fixture: "moviesmock.json"
    })
    .as('e404a')

    cy.wait('@200')
    .get('img[title="Black Adam"]')
    .click()

    cy.wait('@e404a')
    .get('.error-logo')
    .should('be.visible')
    .get('.error-message')
    .contains('p', 'We apologize! Error: Not Found. Please try again later.')
    .should('be.visible');
  });
});
