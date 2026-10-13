import { Paragraph, Spacer, formatVisitedAt } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { HiPencil, HiTrash } from 'react-icons/hi2'
import { removeCountry, setVisitDate } from 'services/user'
import { modalShow, showAddCountryModal, toastNotify } from 'utils'
import { v4 as uuid } from 'uuid'

import { languageDetector } from 'helpers/languageDetector'

import { ActionsComponent, IconComponent, ListItemComponent } from '../DashboardList.styles'

export const VisitedCountries = () => {
	const { t } = useTranslation()

	const { visitedList, visitedCountries, fetchCountriesList } = useCountriesListContext()

	const getVisitedAt = (code?: string) =>
		visitedCountries.find(({ uid }) => uid === code)?.visitedAt

	const handleChangeVisitDate = async (code: string, visitedAt: string | null) => {
		try {
			await setVisitDate(code, visitedAt)

			toastNotify(t('toasts.date.saved'), 'success')

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		}
	}

	const handleRemoveCountry = async (code: string) => {
		try {
			await removeCountry(code)

			toastNotify(t('toasts.remove.country'), 'success')

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		}
	}

	const showRemoveModal = (code: string, country: string, icon: string) =>
		modalShow({
			id: 'remove-country',
			title: t('modal.remove.country'),
			content: (
				<>
					{t('modal.remove.country.content')}

					<Spacer
						type="vertical"
						space="tiny"
					/>

					{`${icon} ${country}`}
				</>
			),
			actionName: t('word.remove'),
			cancelName: t('word.cancel'),
			action: () => handleRemoveCountry(code),
			variant: 'alert',
		})

	return (
		<>
			<Paragraph size="big">{t('word.visited.list')}</Paragraph>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<ul>
				{visitedList?.map(country => {
					const name = languageDetector(country?.nameEN, country?.namePL)

					return (
						<ListItemComponent key={uuid()}>
							<span className="name">{`${country?.icon} ${name}`}</span>

							<ActionsComponent>
								<span className="date">
									{formatVisitedAt(getVisitedAt(country?.code)) || t('visit.date.none')}
								</span>

								<IconComponent
									title={String(t('word.edit.date'))}
									onClick={() =>
										showAddCountryModal({
											icon: country?.icon,
											name: String(name),
											mode: 'edit',
											initialVisitedAt: getVisitedAt(country?.code) || null,
											onConfirm: visitedAt =>
												handleChangeVisitDate(country?.code as string, visitedAt),
										})
									}
								>
									<HiPencil />
								</IconComponent>

								<IconComponent
									isRemoved
									title={String(t('word.remove'))}
									onClick={() =>
										showRemoveModal(
											country?.code as string,
											name as string,
											country?.icon as string,
										)
									}
								>
									<HiTrash />
								</IconComponent>
							</ActionsComponent>
						</ListItemComponent>
					)
				})}
			</ul>

			<Spacer type="vertical" />
		</>
	)
}
