import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { BREAKPOINTS } from 'constants/breakpoints'

import { useWindowSize } from './useWindowSize'

describe('useWindowSize', () => {
	it('updates breakpoint flags after resize', () => {
		Object.defineProperty(window, 'innerWidth', { configurable: true, value: BREAKPOINTS.MOBILE })
		const { result } = renderHook(() => useWindowSize())
		expect(result.current.isMobile).toBe(true)

		act(() => {
			Object.defineProperty(window, 'innerWidth', { configurable: true, value: BREAKPOINTS.TABLET + 1 })
			window.dispatchEvent(new Event('resize'))
		})

		expect(result.current.isWeb).toBe(true)
	})
})
