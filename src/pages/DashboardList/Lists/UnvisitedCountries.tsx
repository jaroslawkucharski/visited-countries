import { Paragraph, Spacer } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { HiHeart, HiOutlineHeart, HiPlusCircle } from 'react-icons/hi2'
import { addFavorite, removeFavorite, setCountry } from 'services/user'
import { showAddCountryModal, toastNotify } from 'utils'
import { v4 as uuid } from 'uuid'

import { languageDetector } from 'helpers/languageDetector'

import { ActionsComponent, IconComponent, ListItemComponent } from '../DashboardList.styles'

export const UnvisitedCountries = () => {
	const { t } = useTranslation()

	const { unvisitedList, fetchCountriesList, isFavorite } = useCountriesListContext()

	const handleToggleFavorite = async (code: string) => {
		try {
			if (isFavorite(code)) {
				await removeFavorite(code)

				toastNotify(t('toasts.favorite.removed'), 'success')
			} else {
				await addFavorite(code)

				toastNotify(t('toasts.favorite.added'), 'success')
			}

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		}
	}

	const handleAddCountry = async (code: string, country: string, visitedAt: string | null) => {
		try {
			await setCountry(code, country, visitedAt)

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
							<span className="name">{`${country?.icon} ${name}`}</span>

							<ActionsComponent>
								<IconComponent
									isFavorite={isFavorite(country?.code)}
									title={String(
										t(isFavorite(country?.code) ? 'favorites.remove' : 'favorites.add'),
									)}
									onClick={() => handleToggleFavorite(country?.code as string)}
									data-testid="toggle-favorite"
								>
									{isFavorite(country?.code) ? <HiHeart /> : <HiOutlineHeart />}
								</IconComponent>

								<IconComponent
									title={String(t('word.add.country'))}
									onClick={() =>
										showAddCountryModal({
											icon: country?.icon,
											name: String(name),
											onConfirm: visitedAt =>
												handleAddCountry(country?.code as string, name as string, visitedAt),
										})
									}
								>
									<HiPlusCircle />
								</IconComponent>
							</ActionsComponent>
						</ListItemComponent>
					)
				})}
			</ul>
		</>
	)
}
