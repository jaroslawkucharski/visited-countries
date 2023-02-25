import { Paragraph, Spacer, modalShow } from '@jaroslaw91/novelui'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { HiPlusCircle } from 'react-icons/hi2'
import { setCountry } from 'services/user'
import { v4 as uuid } from 'uuid'

import { useService } from 'hooks/useService'

import { LOCALES } from 'constants/locales'

import { IconComponent, ListItemComponent } from '../DashboardList.styles'

export const UnvisitedCountries = () => {
	const { t, i18n } = useTranslation()

	const { unvisitedList, fetchCountriesList } = useCountriesListContext()

	const { request: addRequest } = useService({
		service: setCountry,
		successToast: t('toasts.add.country'),
	})

	const handleAddCountry = (uid: string, country: string) => {
		addRequest(uid, country)

		fetchCountriesList()
	}

	const showAddModal = (uid: string, country: string) => {
		modalShow({
			id: 'add-country',
			title: t('modal.add.country'),
			content: t('modal.add.country.content', { country }),
			actionName: t('word.add'),
			cancelName: t('word.cancel'),
			action: () => handleAddCountry(uid, country),
		})
	}

	return (
		<>
			<Paragraph size="big">Your unvisited list:</Paragraph>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<ul>
				{unvisitedList.map(country => {
					const name = i18n.language === LOCALES.EN ? country?.nameEN : country?.namePL

					return (
						<ListItemComponent key={uuid()}>
							{`${country?.icon} `}

							{name}

							<Spacer space="small" />

							<IconComponent>
								<HiPlusCircle
									onClick={() => showAddModal(country?.code as string, name as string)}
								/>
								{/* <HiPlusCircle
									onClick={() => handleAddCountry(country?.code as string, name as string)}
								/> */}
							</IconComponent>
						</ListItemComponent>
					)
				})}
			</ul>
		</>
	)
}
