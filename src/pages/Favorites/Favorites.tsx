import { Heading, Layout, Spacer } from 'components'
import { useTranslation } from 'react-i18next'

import { ProfileColumnComponent } from '../DashboardList/DashboardList.styles'
import { FavoriteCountries } from '../DashboardList/Lists/FavoriteCountries'

export const Favorites = () => {
	const { t } = useTranslation()

	return (
		<Layout>
			<ProfileColumnComponent>
				<Heading>{t('favorites.title')}</Heading>

				<Spacer type="vertical" />

				<FavoriteCountries showEmptyMessage />
			</ProfileColumnComponent>
		</Layout>
	)
}
