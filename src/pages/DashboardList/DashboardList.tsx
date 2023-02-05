import { Button, Heading, Layout, Paragraph, Spacer } from '@jaroslaw91/novelui'
import { Select } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { HiPlusCircle, HiTrash } from 'react-icons/hi2'
import { removeCountry, setCountry } from 'services/user'
import { v4 as uuid } from 'uuid'

import { useService } from 'hooks/useService'

import { LOCALES } from 'constants/locales'

import { IconComponent, ListItemComponent, ProfileColumnComponent } from './DashboardList.styles'

export const DashboardList = () => {
	const { t, i18n } = useTranslation()

	const { countries, visitedList, unvisitedList, fetchCountriesList } = useCountriesListContext()

	const { request: addRequest } = useService({
		service: setCountry,
		successToast: t('toasts.add.country'),
	})

	const handleAddCountry = (uid: string, country: string) => {
		addRequest(uid, country)

		fetchCountriesList()
	}

	const { request: removeRequest } = useService({
		service: removeCountry,
		successToast: t('toasts.remove.country'),
	})

	const handleRemoveCountry = (uid: string) => {
		removeRequest(uid)

		fetchCountriesList()
	}

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
						<ListItemComponent key={uuid()}>
							{`${country?.flag} `}

							{i18n.language === LOCALES.EN
								? country?.name.common
								: country?.translations.pol.common}

							<Spacer space="small" />

							<IconComponent isRemoved>
								<HiTrash onClick={() => handleRemoveCountry(country?.cca3 as string)} />
							</IconComponent>
						</ListItemComponent>
					))}
				</ul>

				<Spacer type="vertical" />

				<Paragraph size="big">Your unvisited list:</Paragraph>

				<Spacer
					type="vertical"
					space="tiny"
				/>

				<ul>
					{unvisitedList.map(country => {
						const name =
							i18n.language === LOCALES.EN ? country?.name.common : country?.translations.pol.common

						return (
							<ListItemComponent key={uuid()}>
								{`${country?.flag}`}

								{name}

								<Spacer space="small" />

								<IconComponent>
									<HiPlusCircle
										onClick={() => handleAddCountry(country?.cca3 as string, name as string)}
									/>
								</IconComponent>
							</ListItemComponent>
						)
					})}
				</ul>
			</ProfileColumnComponent>
		</Layout>
	)
}
