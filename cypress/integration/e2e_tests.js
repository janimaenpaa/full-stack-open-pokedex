/* eslint-disable no-undef */
describe('Pokedex', function () {
  before(() => {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function () {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to', function () {
    cy.get('[href="/pokemon/ivysaur"]').click()
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})
