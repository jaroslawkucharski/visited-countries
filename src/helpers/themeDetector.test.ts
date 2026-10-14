import { describe, expect, it, vi } from 'vitest'

import { themeDetector } from './themeDetector'

describe('themeDetector', () => {
	it('detects the dark system theme', () => {
		vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as MediaQueryList)
		expect(themeDetector()).toBe('dark')
	})

	it('falls back to the light system theme', () => {
		vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: false } as MediaQueryList)
		expect(themeDetector()).toBe('light')
	})
})
