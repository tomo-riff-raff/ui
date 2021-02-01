describe('tomo is working', () => {
  it('loads the homepage', () => {
    cy.visit('/')
    cy.contains('TOMO')
  })
})