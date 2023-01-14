import { Link } from 'components'
import { HiGlobeAlt, HiQueueList, HiUserCircle } from 'react-icons/hi2'
import { ROUTES } from 'routes'

import { MobileMenuComponent } from './MobileMenu.style'

export const MobileMenu = () => (
	<MobileMenuComponent>
		<Link to={ROUTES.DASHBOARD}>
			<HiGlobeAlt />
		</Link>

		<Link to={ROUTES.DASHBOARD_LIST}>
			<HiQueueList />
		</Link>

		<Link to={ROUTES.PROFILE}>
			<HiUserCircle />
		</Link>
	</MobileMenuComponent>
)
