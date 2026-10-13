import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { HiHeart, HiPlusCircle } from 'react-icons/hi2'

import { matchesCountry } from 'helpers/countrySearch'

import { useCountryActions } from 'hooks/useCountryActions'

import { EmptyResultsComponent, IconComponent } from '../DashboardList.styles'
import { CountriesSection } from './CountriesSection'
import { CountryListItem } from './CountryListItem'

interface FavoriteCountriesProps {
	query?: string
	showEmptyMessage?: boolean
}

export const FavoriteCountries = ({
	query = '',
	showEmptyMessage = false,
}: FavoriteCountriesProps) => {
	const { t, i18n } = useTranslation()
	const { favoriteList } = useCountriesListContext()
	const { removeFromFavorites, openAddModal, getCountryName } = useCountryActions()

	const filtered = (favoriteList || []).filter(country =>
		matchesCountry(country, query, i18n.language),
	)

	if (filtered.length === 0) {
		return showEmptyMessage ? (
			<EmptyResultsComponent>{t('favorites.empty')}</EmptyResultsComponent>
		) : null
	}

	return (
		<CountriesSection
			title={t('favorites.list')}
			data-testid="favorites-list"
		>
			{filtered.map(country => (
				<CountryListItem
					key={country?.code}
					country={country}
				>
					<IconComponent
						isFavorite
						title={String(t('favorites.remove'))}
						aria-label={`${t('favorites.remove')}: ${getCountryName(country)}`}
						onClick={() => removeFromFavorites(String(country?.code))}
					>
						<HiHeart />
					</IconComponent>

					<IconComponent
						title={String(t('word.add.country'))}
						aria-label={`${t('word.add.country')}: ${getCountryName(country)}`}
						onClick={() => openAddModal(country)}
					>
						<HiPlusCircle />
					</IconComponent>
				</CountryListItem>
			))}
		</CountriesSection>
	)
}
