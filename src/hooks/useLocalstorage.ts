import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const useLocalStorage = <T>(storageKey: string): [T, Dispatch<SetStateAction<T>>] => {
	const [value, setValue] = useState<T>(JSON.parse(localStorage.getItem(storageKey) as string))

	useEffect(() => localStorage.setItem(storageKey, JSON.stringify(value)), [value, storageKey])

	return [value, setValue]
}
