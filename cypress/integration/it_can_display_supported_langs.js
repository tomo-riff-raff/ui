describe('Languages Supported Page', () => {
  it('can be visited from home page', () => {
    cy.visit('/')

    cy.contains('Languages supported').click()

    cy.url().should('include', '/languages')
  })

  it('displays currently supported languages', () => {
    cy.visit('/languages')

    cy.contains('English')
    cy.contains('Japanese')
  })
})
