import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { HiHeart, HiOutlineHeart, HiPlusCircle } from 'react-icons/hi2'

import { matchesCountry } from 'helpers/countrySearch'

import { useCountryActions } from 'hooks/useCountryActions'

import { IconComponent } from '../DashboardList.styles'
import { CountriesSection } from './CountriesSection'
import { CountryListItem } from './CountryListItem'

interface UnvisitedCountriesProps {
	query?: string
}

export const UnvisitedCountries = ({ query = '' }: UnvisitedCountriesProps) => {
	const { t, i18n } = useTranslation()
	const { unvisitedList } = useCountriesListContext()
	const { isFavorite, toggleFavorite, openAddModal } = useCountryActions()

	const filtered = (unvisitedList || []).filter(country =>
		matchesCountry(country, query, i18n.language),
	)

	if (query && filtered.length === 0) {
		return null
	}

	return (
		<CountriesSection title={t('word.unvisited.list')}>
			{filtered.map(country => {
				const favorite = isFavorite(country?.code)

				return (
					<CountryListItem
						key={country?.code}
						country={country}
					>
						<IconComponent
							isFavorite={favorite}
							title={String(t(favorite ? 'favorites.remove' : 'favorites.add'))}
							onClick={() => toggleFavorite(String(country?.code))}
							data-testid="toggle-favorite"
						>
							{favorite ? <HiHeart /> : <HiOutlineHeart />}
						</IconComponent>

						<IconComponent
							title={String(t('word.add.country'))}
							onClick={() => openAddModal(country)}
						>
							<HiPlusCircle />
						</IconComponent>
					</CountryListItem>
				)
			})}
		</CountriesSection>
	)
}
