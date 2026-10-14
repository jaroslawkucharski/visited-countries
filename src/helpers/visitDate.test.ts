import { describe, expect, it } from 'vitest'

import { formatVisitedAt, getMonthName, toMonthValue, toVisitedAt } from './visitDate'

describe('helpers/visitDate', () => {
	it('should build and format visit dates', () => {
		expect(toVisitedAt('2026', '03')).toBe('2026-03')
		expect(toVisitedAt('2026', '')).toBe('2026')
		expect(toVisitedAt('', '03')).toBeNull()
		expect(formatVisitedAt('2026-03')).toBe('03.2026')
		expect(formatVisitedAt('2026')).toBe('2026')
		expect(formatVisitedAt(undefined)).toBeNull()
	})

	it('should return month values and capitalized names', () => {
		expect(toMonthValue(0)).toBe('01')
		expect(getMonthName(0, 'en-US')).toBe('January')
	})
})
