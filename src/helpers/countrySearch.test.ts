import { describe, expect, it } from 'vitest'

import { matchesCountry, normalizeText } from './countrySearch'

describe('helpers/countrySearch', () => {
	it('should ignore case and Polish diacritics', () => {
		expect(normalizeText('Łódź ŚWIĘTE')).toBe('lodz swiete')
	})

	it('should match the name in the current language', () => {
		const country = { nameEN: 'Germany', namePL: 'Niemcy', code: 'DEU', icon: '' }

		expect(matchesCountry(country, 'niem', 'pl-PL')).toBe(true)
		expect(matchesCountry(country, 'GERM', 'pl-PL')).toBe(false)
		expect(matchesCountry(country, 'GERM', 'en-US')).toBe(true)
		expect(matchesCountry(country, '', 'pl-PL')).toBe(true)
	})
})
