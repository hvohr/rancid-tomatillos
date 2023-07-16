const error500Home = () => {
  cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 500,
    fixture: "moviesmock.json"
  })
  .visit("http://localhost:3000/")
};

const error500Alt = () => {
  cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
    statusCode: 500,
    fixture: "moviesmock.json"
  })
  .visit("http://localhost:3000/")
};

const successHome = () => {
  cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    statusCode: 200,
    fixture: "moviesmock.json"
  })
  .visit("http://localhost:3000/")
};

describe('The user should be notified that connection failed on the home page when there is a 500 error.', () => {
  const error500Home = () => {
    cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      fixture: "moviesmock.json"
    })
    .visit("http://localhost:3000/")
  };
  it("The user should be notified that connection failed.", () => {
    error500Home();
    cy.get('.error-logo')
    .should('be.visible')
    .get('.error-message')
    .contains('p', 'We apologize! Error: Internal Server Error. Please try again later.')
    .should('be.visible');
  });
});

describe('The user should be notified that connection failed on the movie info page when there is a 500 error.', () => {
  it("The user should be notified that connection failed.", () => {
    successHome();
    error500Alt();
    cy.get('img[title="Black Adam"]')
    .click()
    .get('.error-logo')
    .should('be.visible')
    .get('.error-message')
    .contains('p', 'We apologize! Error: Internal Server Error. Please try again later.')
    .should('be.visible');
  });
});
