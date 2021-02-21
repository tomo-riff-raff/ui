describe('Login / logout functionality', () => {
  it('can login user', () => {
    cy.visit('/')

    cy.contains('login').click()

    cy.contains('logout')
  })

  it('can logout user', () => {
    cy.visit('/')

    cy.contains('login').click()
    cy.contains('logout').click()

    cy.contains('login')
  })
})
