import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { HiPencil, HiTrash } from 'react-icons/hi2'

import { matchesCountry } from 'helpers/countrySearch'
import { formatVisitedAt } from 'helpers/visitDate'

import { useCountryActions } from 'hooks/useCountryActions'

import { IconComponent } from '../DashboardList.styles'
import { CountriesSection } from './CountriesSection'
import { CountryListItem } from './CountryListItem'

interface VisitedCountriesProps {
	query?: string
}

export const VisitedCountries = ({ query = '' }: VisitedCountriesProps) => {
	const { t, i18n } = useTranslation()
	const { visitedList } = useCountriesListContext()
	const { getVisitedAt, openEditModal, confirmRemoveCountry, getCountryName } = useCountryActions()

	const filtered = (visitedList || []).filter(country =>
		matchesCountry(country, query, i18n.language),
	)

	if (query && filtered.length === 0) {
		return null
	}

	return (
		<CountriesSection title={t('word.visited.list')}>
			{filtered.map(country => (
				<CountryListItem
					key={country?.code}
					country={country}
				>
					<span className="date">
						{formatVisitedAt(getVisitedAt(country?.code)) || t('visit.date.none')}
					</span>

					<IconComponent
						title={String(t('word.edit.date'))}
						aria-label={`${t('word.edit.date')}: ${getCountryName(country)}`}
						onClick={() => openEditModal(country)}
					>
						<HiPencil />
					</IconComponent>

					<IconComponent
						isRemoved
						title={String(t('word.remove'))}
						aria-label={`${t('word.remove')}: ${getCountryName(country)}`}
						onClick={() => confirmRemoveCountry(country)}
					>
						<HiTrash />
					</IconComponent>
				</CountryListItem>
			))}
		</CountriesSection>
	)
}
