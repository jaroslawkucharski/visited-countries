import { Link } from 'components'
import { useTranslation } from 'react-i18next'
import { TbHeart, TbListDetails, TbMapPin, TbUser } from 'react-icons/tb'

import { ROUTES } from 'constants/routes'

import { MobileMenuComponent } from './MobileMenu.style'

export const MobileMenu = () => {
	const { t } = useTranslation()

	return (
		<MobileMenuComponent
			as="nav"
			aria-label={String(t('word.menu'))}
		>
			<Link
				to={ROUTES.DASHBOARD}
				ariaLabel={String(t('word.map'))}
			>
				<TbMapPin />
			</Link>

			<Link
				to={ROUTES.DASHBOARD_LIST}
				ariaLabel={String(t('word.list'))}
			>
				<TbListDetails />
			</Link>

			<Link
				to={ROUTES.FAVORITES}
				ariaLabel={String(t('favorites.title'))}
			>
				<TbHeart />
			</Link>

			<Link
				to={ROUTES.PROFILE}
				ariaLabel={String(t('word.profile'))}
			>
				<TbUser />
			</Link>
		</MobileMenuComponent>
	)
}
