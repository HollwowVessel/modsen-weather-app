/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('Check TownInfo component', () => {
    cy.get('[data-cy=town]').should('have.text', ' Беларусь');
    cy.get('[data-cy=address]').should('have.text', 'Витебск');
  });

  it('Check TodayWeather component', () => {
    cy.get('[data-cy=today-temp]').should('have.length.at.least', 1);

    cy.get('[data-cy=today-temp]').should(
      'not.have.text',
      'Something went completely wrong'
    );
  });

  it('Check TownInput component', () => {
    const town = 'Minsk';
    cy.get('[data-cy=change-town-btn]').click();
    cy.get('[data-cy=town-input]').type(`${town}{enter}`);
    cy.get('[data-cy=town]').should('have.text', ' Беларусь');
    cy.get('[data-cy=address]').should('have.text', 'Minsk');
  });

  it('Check WeatherItem component', () => {
    const town = 'Minsk';
    cy.get('[data-cy=change-town-btn]').click();
    cy.get('[data-cy=town-input]').type(`${town}{enter}`);
    cy.get('[data-cy=weather-items]').should(
      'not.have.text',
      'Something went completely wrong'
    );
    cy.get('[data-cy=weather-items]').should(
      'not.have.text',
      'Something went completely wrong'
    );
    cy.get('[data-cy=day-of-week]').should('have.length', 7);
  });
});
