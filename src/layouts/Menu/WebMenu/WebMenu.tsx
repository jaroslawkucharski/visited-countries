import { Link } from 'components'
import { HiGlobeAlt, HiQueueList, HiUserCircle } from 'react-icons/hi2'
import { ROUTES } from 'routes'

import { MobileMenuComponent } from './WebMenu.style'

export const WebMenu = () => (
	<MobileMenuComponent>
		<div>
			<Link to={ROUTES.DASHBOARD}>
				<HiGlobeAlt />
			</Link>

			<Link to={ROUTES.DASHBOARD_LIST}>
				<HiQueueList />
			</Link>

			<Link to={ROUTES.PROFILE}>
				<HiUserCircle />
			</Link>
		</div>

		<Link to={ROUTES.DASHBOARD}>
			<HiGlobeAlt />
		</Link>
	</MobileMenuComponent>
)
