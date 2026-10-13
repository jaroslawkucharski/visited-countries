import { Link } from 'components'
import { TbHeart, TbListDetails, TbMapPin, TbUser } from 'react-icons/tb'

import { ROUTES } from 'constants/routes'

import { MobileMenuComponent } from './MobileMenu.style'

export const MobileMenu = () => (
	<MobileMenuComponent>
		<Link to={ROUTES.DASHBOARD}>
			<TbMapPin />
		</Link>

		<Link to={ROUTES.DASHBOARD_LIST}>
			<TbListDetails />
		</Link>

		<Link to={ROUTES.FAVORITES}>
			<TbHeart />
		</Link>

		<Link to={ROUTES.PROFILE}>
			<TbUser />
		</Link>
	</MobileMenuComponent>
)
