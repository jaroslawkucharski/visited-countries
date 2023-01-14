import { useAuthContext } from 'context/AuthContext'

import { useWindowSize } from 'hooks/useWindowSize'

import { BREAKPOINTS } from 'constants/breakpoints'

import { MobileMenu } from './MobileMenu'
import { WebMenu } from './WebMenu'

export const Menu = () => {
	const { userAuth } = useAuthContext()

	const { width } = useWindowSize()

	const renderMenu = () => {
		if (width <= BREAKPOINTS.MOBILE) {
			return <MobileMenu />
		}

		return <WebMenu />
	}

	return userAuth ? renderMenu() : null
}
