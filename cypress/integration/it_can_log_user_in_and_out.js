describe('Login / logout functionality', () => {
  it('can login user', () => {
    cy.visit('/')

    cy.contains('Login').click()

    cy.contains('Logout')
  })

  it('can logout user', () => {
    cy.visit('/')

    cy.contains('Login').click()
    cy.contains('Logout').click()

    cy.contains('Login')
  })
})
