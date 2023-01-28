import { useLayoutEffect, useState } from 'react'

import { BREAKPOINTS } from 'constants/breakpoints'

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({ isMobile: false, isTable: false, isWeb: false })

	const handleSize = () =>
		setWindowSize({
			isMobile: window.innerWidth <= BREAKPOINTS.MOBILE,
			isTable: window.innerWidth < BREAKPOINTS.MOBILE && window.innerWidth <= BREAKPOINTS.TABLET,
			isWeb: window.innerWidth > BREAKPOINTS.TABLET,
		})

	useLayoutEffect(() => {
		handleSize()

		window.addEventListener('resize', handleSize)

		return () => window.removeEventListener('resize', handleSize)
	}, [])

	return windowSize
}
