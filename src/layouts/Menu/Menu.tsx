import { useAuthContext } from 'context/AuthContext'

import { useWindowSize } from 'hooks/useWindowSize'

import { MobileMenu } from './MobileMenu'
import { WebMenu } from './WebMenu'

export const Menu = () => {
	const { userAuth } = useAuthContext()

	const { isMobile } = useWindowSize()

	const renderMenu = () => {
		if (isMobile) {
			return <MobileMenu />
		}

		return <WebMenu />
	}

	return userAuth ? renderMenu() : null
}
