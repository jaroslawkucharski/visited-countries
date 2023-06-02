import { Paragraph, Spacer } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { HiPlusCircle } from 'react-icons/hi2'
import { setCountry } from 'services/user'
import { toastNotify } from 'utils'
import { v4 as uuid } from 'uuid'

import { languageDetector } from 'helpers/languageDetector'

import { IconComponent, ListItemComponent } from '../DashboardList.styles'

export const UnvisitedCountries = () => {
	const { t } = useTranslation()

	const { unvisitedList, fetchCountriesList } = useCountriesListContext()

	const handleAddCountry = async (code: string, country: string) => {
		try {
			await setCountry(code, country)

			toastNotify(t('toasts.add.country'), 'success')

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		}
	}

	return (
		<>
			<Paragraph size="big">{t('word.unvisited.list')}</Paragraph>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<ul>
				{unvisitedList?.map(country => {
					const name = languageDetector(country?.nameEN, country?.namePL)

					return (
						<ListItemComponent key={uuid()}>
							{`${country?.icon} `}

							{name}

							<Spacer space="small" />

							<IconComponent
								onClick={() => handleAddCountry(country?.code as string, name as string)}
							>
								<HiPlusCircle />
							</IconComponent>
						</ListItemComponent>
					)
				})}
			</ul>
		</>
	)
}
