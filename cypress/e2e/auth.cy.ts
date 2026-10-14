describe('Authentication flows', () => {
	it('redirects unauthenticated users from private pages', () => {
		cy.visit('/profile')
		cy.location('pathname').should('eq', '/signin')
		cy.visit('/favorites')
		cy.location('pathname').should('eq', '/signin')
	})

	it('allows a user to log out', () => {
		cy.login()
		cy.contains('Your account').click()
		cy.contains('Log out').click()
		cy.location('pathname', { timeout: 10000 }).should('eq', '/signin')
	})
})
