import { Layout, Spacer } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { matchesCountry } from 'helpers/countrySearch'

import { EmptyResultsComponent, ProfileColumnComponent } from './DashboardList.styles'
import { FavoriteCountries } from './Lists/FavoriteCountries'
import { SearchCountries } from './Lists/SearchCountries'
import { UnvisitedCountries } from './Lists/UnvisitedCountries'
import { VisitedCountries } from './Lists/VisitedCountries'

export const DashboardList = () => {
	const { t, i18n } = useTranslation()
	const [query, setQuery] = useState('')

	const { countries } = useCountriesListContext()

	const hasResults =
		!query || countries?.some(country => matchesCountry(country, query, i18n.language))

	return (
		<Layout>
			<ProfileColumnComponent>
				<SearchCountries
					query={query}
					onChange={setQuery}
				/>

				<Spacer type="vertical" />

				{hasResults ? (
					<>
						<VisitedCountries query={query} />

						<FavoriteCountries query={query} />

						<UnvisitedCountries query={query} />
					</>
				) : (
					<EmptyResultsComponent data-testid="countries-search-empty">
						{t('word.empty.message')}
					</EmptyResultsComponent>
				)}
			</ProfileColumnComponent>
		</Layout>
	)
}
