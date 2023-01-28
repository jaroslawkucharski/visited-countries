import { Button, Heading, Layout, Paragraph, Select, Spacer } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { v4 as uuid } from 'uuid'

import { LOCALES } from 'constants/locales'

import { ProfileColumnComponent } from './DashboardList.styles'

export const DashboardList = () => {
	const { t, i18n } = useTranslation()

	const { countries, visitedList, unvisitedList } = useCountriesListContext()

	return (
		<Layout>
			<ProfileColumnComponent>
				<Heading>{t('word.list')}</Heading>

				<Spacer type="vertical" />

				<Select
					options={countries.map(country => {
						const name =
							i18n.language === LOCALES.EN ? country.name.common : country.translations.pol.common

						return {
							icon: country.flag,
							name,
							id: country.cca3,
						}
					})}
					hasFullWidth
				/>

				<Spacer type="vertical" />

				<Button hasFullWidth>Add country</Button>

				<Spacer type="vertical" />

				<Paragraph size="big">Your visited list:</Paragraph>

				<Spacer
					type="vertical"
					space="tiny"
				/>

				<ul>
					{visitedList.map(country => (
						<li key={uuid()}>
							{country?.flag}{' '}
							{i18n.language === LOCALES.EN
								? country?.name.common
								: country?.translations.pol.common}
							<Spacer
								type="vertical"
								space="tiny"
							/>
						</li>
					))}
				</ul>

				<Spacer type="vertical" />

				<Paragraph size="big">Your unvisited list:</Paragraph>

				<Spacer
					type="vertical"
					space="tiny"
				/>

				<ul>
					{unvisitedList.map(country => (
						<li key={uuid()}>
							{country?.flag}{' '}
							{i18n.language === LOCALES.EN
								? country?.name.common
								: country?.translations.pol.common}
							<Spacer
								type="vertical"
								space="tiny"
							/>
						</li>
					))}
				</ul>
			</ProfileColumnComponent>
		</Layout>
	)
}
