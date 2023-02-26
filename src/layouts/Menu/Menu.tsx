import { useAuthContext } from 'context/AuthContext'
import { useLocation } from 'react-router-dom'

import { useWindowSize } from 'hooks/useWindowSize'

import { ROUTES } from 'constants/routes'

import { MobileMenu } from './MobileMenu'
import { WebMenu } from './WebMenu'

export const Menu = () => {
	const { userAuth } = useAuthContext()
	const { pathname } = useLocation()

	const { isMobile } = useWindowSize()

	const renderMenu = () => {
		if (isMobile) {
			return <MobileMenu />
		}

		if (pathname === ROUTES.DASHBOARD) {
			return <WebMenu />
		}

		return null
	}

	return userAuth ? renderMenu() : null
}
