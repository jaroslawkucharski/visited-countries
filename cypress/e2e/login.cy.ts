describe('Login page', () => {
	it('Visit on login page', () => {
		cy.visit('/signin')

		cy.get('input[name=email]').type('cypress_test_account@visitedcountries.com')

		cy.get('input[name=password]').type('12345678')

		cy.get('button[type=submit]').click()
	})
})
