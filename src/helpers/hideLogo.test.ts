import { describe, expect, it } from 'vitest'

import { hideLogo } from './hideLogo'

describe('hideLogo', () => {
	it('hides the logo on list and profile pages', () => {
		expect(hideLogo('/list')).toBe(true)
		expect(hideLogo('/profile')).toBe(true)
	})

	it('does not hide the logo on public and dashboard pages', () => {
		expect(hideLogo('/')).toBe(false)
		expect(hideLogo('/signin')).toBe(false)
		expect(hideLogo('/settings')).toBe(false)
	})
})
