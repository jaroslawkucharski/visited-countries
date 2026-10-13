import { Dropdown, IconBadge } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { TbCirclePlus, TbHeart, TbHeartOff } from 'react-icons/tb'

import { useCountryActions } from 'hooks/useCountryActions'

import { DropdownSection, DropdownText } from './DropdownSection'
import { FavoritesListComponent } from './TopBar.styles'

export const FavoritesDropdown = () => {
	const { t } = useTranslation()
	const { favoriteList } = useCountriesListContext()
	const { getCountryName, removeFromFavorites, openAddModal } = useCountryActions()

	return (
		<Dropdown
			label={
				<IconBadge
					icon={<TbHeart />}
					count={favoriteList.length}
					data-testid="button-favorites"
				/>
			}
			customButtonProps={{ variant: 'icon' }}
			hasChevron={false}
			ariaLabel={String(t('favorites.title'))}
			dropdownWith={100}
			dropdownContentWith="300px"
		>
			<DropdownSection
				icon={<TbHeart />}
				title={String(t('favorites.title'))}
			>
				{favoriteList.length === 0 ? (
					<DropdownText>{t('favorites.empty')}</DropdownText>
				) : (
					<FavoritesListComponent data-testid="favorites-dropdown">
						{favoriteList.map(country => {
							const name = getCountryName(country)

							return (
								<li key={country?.code}>
									<span>{`${country?.icon} ${name}`}</span>

									<div className="actions">
										<button
											type="button"
											title={String(t('favorites.remove'))}
											aria-label={`${t('favorites.remove')}: ${name}`}
											onClick={() => removeFromFavorites(String(country?.code))}
										>
											<TbHeartOff />
										</button>

										<button
											type="button"
											title={String(t('word.add.country'))}
											aria-label={`${t('word.add.country')}: ${name}`}
											onClick={() => openAddModal(country)}
											data-testid="favorite-add-visited"
										>
											<TbCirclePlus />
										</button>
									</div>
								</li>
							)
						})}
					</FavoritesListComponent>
				)}
			</DropdownSection>
		</Dropdown>
	)
}
