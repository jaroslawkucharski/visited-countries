import { Paragraph, Spacer } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { HiHeart, HiPlusCircle } from 'react-icons/hi2'
import { removeFavorite, setCountry } from 'services/user'
import { showAddCountryModal, toastNotify } from 'utils'

import { languageDetector } from 'helpers/languageDetector'

import { ActionsComponent, IconComponent, ListItemComponent } from '../DashboardList.styles'

// Countries the user wants to visit
export const FavoriteCountries = () => {
	const { t } = useTranslation()

	const { favoriteList, fetchCountriesList } = useCountriesListContext()

	const handleRemoveFavorite = async (code: string) => {
		try {
			await removeFavorite(code)

			toastNotify(t('toasts.favorite.removed'), 'success')

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

	if (favoriteList.length === 0) {
		return null
	}

	return (
		<>
			<Paragraph size="big">{t('favorites.list')}</Paragraph>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<ul data-testid="favorites-list">
				{favoriteList.map(country => {
					const name = languageDetector(country?.nameEN, country?.namePL)

					return (
						<ListItemComponent key={country?.code}>
							<span className="name">{`${country?.icon} ${name}`}</span>

							<ActionsComponent>
								<IconComponent
									isFavorite
									title={String(t('favorites.remove'))}
									onClick={() => handleRemoveFavorite(country?.code as string)}
								>
									<HiHeart />
								</IconComponent>

								<IconComponent
									title={String(t('word.add.country'))}
									onClick={() =>
										showAddCountryModal({
											icon: country?.icon,
											name: String(name),
											onConfirm: visitedAt =>
												handleAddCountry(
													country?.code as string,
													String(country?.nameEN),
													visitedAt,
												),
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

			<Spacer type="vertical" />
		</>
	)
}
