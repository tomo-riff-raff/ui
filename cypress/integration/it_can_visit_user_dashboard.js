describe('User dashboard', () => {
  it('cannot visit from navbar when user is not logged in', () => {
    cy.visit('/')

    cy.contains('Dashboard').should('not.exist')
  })

  it('can visit from navbar when user is logged in', () => {
    cy.visit('/')

    cy.contains('login').click()

    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard')
  })

  it('can see specific info on dashboard when logged in', () => {
    cy.visit('/')

    cy.contains('login').click()
    cy.contains('Dashboard').click()

    cy.contains('Logged in as: LoganRools')
    cy.contains('Pairings')
  })

})
