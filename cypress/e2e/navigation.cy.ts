describe('Public navigation', () => {
	it('opens the password reset page', () => {
		cy.visit('/signin')
		cy.contains('Forgot password?').click()
		cy.location('pathname').should('eq', '/password-reset')
	})

	it('opens the registration page', () => {
		cy.visit('/signin')
		cy.contains('Sign up').click()
		cy.location('pathname').should('eq', '/signup')
	})

	it('shows the not found page for an unknown route', () => {
		cy.visit('/route-that-does-not-exist')
		cy.contains('Page not found').should('be.visible')
	})
})
