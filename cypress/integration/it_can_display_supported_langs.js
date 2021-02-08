describe('Languages Supported Page', () => {
  it('Visits the home page', () => {
    cy.visit('/')

    cy.contains('Languages supported').click()

    cy.url().should('include', '/languages')
    cy.contains('English')
    cy.contains('Japanese')
  })
})