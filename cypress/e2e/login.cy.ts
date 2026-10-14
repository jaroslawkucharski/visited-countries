describe('Login page', () => {
	it('logs in with valid credentials', () => {
		cy.visit('/signin')

		cy.get('input[name=email]').type(Cypress.env('TEST_USER_EMAIL') || 'cypress_test_account@visitedcountries.com')

		cy.get('input[name=password]').type(Cypress.env('TEST_USER_PASSWORD') || '12345678')

		cy.get('button[type=submit]').click()
		cy.location('pathname', { timeout: 10000 }).should('eq', '/')
	})

	it('disables submit for invalid form data', () => {
		cy.visit('/signin')
		cy.get('input[name=email]').type('not-an-email').blur()
		cy.get('input[name=password]').type('123').blur()
		cy.get('button[type=submit]').should('be.disabled')
	})
})
