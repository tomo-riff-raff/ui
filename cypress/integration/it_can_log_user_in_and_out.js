describe('Languages Supported Page', () => {
  it('can login user', () => {
    cy.visit('/')

    cy.contains('login').click()

    cy.contains('Logged in as: LoganRools')
    cy.contains('logout')
  })

  it('can logout user', () => {
    cy.visit('/')

    cy.contains('login').click()
    cy.contains('logout').click()

    cy.contains('Logged in as: LoganRools').should('not.exist')
    cy.contains('login')
  })
})
