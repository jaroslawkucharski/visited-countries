import { Link } from 'components'
import { useAuthContext } from 'context/AuthContext'
import { HiGlobe, HiUserCircle, HiViewList } from 'react-icons/hi'
import { ROUTES } from 'routes'

import { useWindowSize } from 'hooks/useWindowSize'

import { BREAKPOINTS } from 'constants/breakpoints'

import { MobileMenuComponent } from './MobileMenu.style'

export const MobileMenu = () => {
	const { userAuth } = useAuthContext()

	const { width } = useWindowSize()

	return userAuth && width <= BREAKPOINTS.MOBILE ? (
		<MobileMenuComponent>
			<Link to={ROUTES.DASHBOARD}>
				<HiGlobe />
			</Link>

			<Link to={ROUTES.DASHBOARD_LIST}>
				<HiViewList />
			</Link>

			<Link to={ROUTES.PROFILE}>
				<HiUserCircle />
			</Link>
		</MobileMenuComponent>
	) : null
}
