/// <reference types="cypress" />

declare global {
	namespace Cypress {
		interface Chainable {
			login(): Chainable<void>
		}
	}
}

Cypress.Commands.add('login', () => {
	const email = Cypress.env('TEST_USER_EMAIL') || 'cypress_test_account@visitedcountries.com'
	const password = Cypress.env('TEST_USER_PASSWORD') || '12345678'

	cy.visit('/signin')
	cy.get('input[name=email]').type(email)
	cy.get('input[name=password]').type(password)
	cy.get('button[type=submit]').click()
	cy.location('pathname', { timeout: 10000 }).should('eq', '/')
})
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
