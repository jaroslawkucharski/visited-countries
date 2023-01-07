import { useEffect } from 'react'

export const useScrollDetector: (handler: () => void) => void = handler => {
	useEffect(() => {
		window.addEventListener('scroll', handler)

		return () => {
			window.removeEventListener('scroll', handler)
		}
	}, [handler])
}
