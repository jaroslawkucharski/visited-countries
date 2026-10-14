import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { useLocalStorage } from './useLocalstorage'

describe('useLocalStorage', () => {
	it('reads and persists a value', () => {
		localStorage.setItem('count', JSON.stringify(1))
		const { result } = renderHook(() => useLocalStorage<number>('count'))
		expect(result.current[0]).toBe(1)

		act(() => result.current[1](2))
		expect(JSON.parse(localStorage.getItem('count') as string)).toBe(2)
	})
})
