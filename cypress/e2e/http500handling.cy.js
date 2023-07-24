
describe('The user should be notified that connection failed on the home page when there is a 500 error.', () => {

  it("The user should be notified that connection failed.", () => {

    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 200,
    fixture: "moviesmock.json"
    })
    .visit("http://localhost:3000/")

    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 500,
    fixture: "moviesmock.json"
    })
    .as('e500h')

    cy.wait('@e500h')
    .get('.error-logo')
    .should('be.visible')
    .get('.error-message')
    .contains('p', 'We apologize! Error: Internal Server Error. Please try again later.')
    .should('be.visible');
  });
});

describe('The user should be notified that connection failed on the movie info page when there is a 500 error.', () => {
  it("The user should be notified that connection failed.",  () => {

    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: "moviesmock.json"
    })
    .as('200')
    .visit("http://localhost:3000/")
  
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 500,
      fixture: "moviesmock.json"
    })
    .as('e500a')

    cy.wait('@200')
    .get('img[title="Black Adam"]')
    .click()

    cy.wait('@e500a')
    .get('.error-logo')
    .should('be.visible')
    .get('.error-message')
    .contains('p', 'We apologize! Error: Internal Server Error. Please try again later.')
    .should('be.visible');
  });
});
