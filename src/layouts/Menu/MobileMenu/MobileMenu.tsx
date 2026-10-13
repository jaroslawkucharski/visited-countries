import { IconBadge, Link } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { TbHeart, TbListDetails, TbMapPin, TbUser } from 'react-icons/tb'

import { ROUTES } from 'constants/routes'

import { MobileMenuComponent } from './MobileMenu.style'

export const MobileMenu = () => {
	const { t } = useTranslation()
	const { favoriteList } = useCountriesListContext()

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
				ariaLabel={`${t('favorites.title')}${
					favoriteList.length ? ` (${favoriteList.length})` : ''
				}`}
			>
				<IconBadge
					icon={<TbHeart />}
					count={favoriteList.length}
					placement="outside"
					data-testid="menu-favorites"
				/>
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
