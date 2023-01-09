import { useAuthContext } from 'context/AuthContext'
import { HiGlobe, HiUserCircle, HiViewList } from 'react-icons/hi'

import { useWindowSize } from 'hooks/useWindowSize'

import { BREAKPOINTS } from 'constants/breakpoints'

import { MobileMenuComponent } from './MobileMenu.style'

export const MobileMenu = () => {
	const { userAuth } = useAuthContext()

	const { width } = useWindowSize()

	return userAuth && width <= BREAKPOINTS.MOBILE ? (
		<MobileMenuComponent>
			<HiGlobe />
			<HiViewList />
			<HiUserCircle />
		</MobileMenuComponent>
	) : null
}
