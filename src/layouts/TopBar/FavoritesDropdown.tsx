import { Dropdown, Paragraph, Spacer } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { useTranslation } from 'react-i18next'
import { TbCirclePlus, TbHeart, TbHeartOff } from 'react-icons/tb'

import { useCountryActions } from 'hooks/useCountryActions'

import {
	FavoritesListComponent,
	IconBadgeComponent,
	VisitedSectionComponent,
} from './TopBar.styles'

export const FavoritesDropdown = () => {
	const { t } = useTranslation()
	const { favoriteList } = useCountriesListContext()
	const { getCountryName, removeFromFavorites, openAddModal } = useCountryActions()

	return (
		<Dropdown
			label={
				<IconBadgeComponent data-testid="button-favorites">
					<TbHeart />

					{favoriteList.length > 0 && <span className="count">{favoriteList.length}</span>}
				</IconBadgeComponent>
			}
			customButtonProps={{ variant: 'icon' }}
			hasChevron={false}
			ariaLabel={String(t('favorites.title'))}
			dropdownWith={100}
			dropdownContentWith="300px"
		>
			<VisitedSectionComponent>
				<Paragraph type="dropdown">
					<TbHeart /> {t('favorites.title').toUpperCase()}
				</Paragraph>

				<Spacer
					space="mini"
					type="vertical"
				/>

				{favoriteList.length === 0 ? (
					<Paragraph
						type="dropdown"
						align="left"
						size="s12"
					>
						{t('favorites.empty')}
					</Paragraph>
				) : (
					<FavoritesListComponent data-testid="favorites-dropdown">
						{favoriteList.map(country => (
							<li key={country?.code}>
								<span>{`${country?.icon} ${getCountryName(country)}`}</span>

								<div className="actions">
									<button
										type="button"
										title={String(t('favorites.remove'))}
										aria-label={`${t('favorites.remove')}: ${getCountryName(country)}`}
										onClick={() => removeFromFavorites(String(country?.code))}
									>
										<TbHeartOff />
									</button>

									<button
										type="button"
										title={String(t('word.add.country'))}
										aria-label={`${t('word.add.country')}: ${getCountryName(country)}`}
										onClick={() => openAddModal(country)}
										data-testid="favorite-add-visited"
									>
										<TbCirclePlus />
									</button>
								</div>
							</li>
						))}
					</FavoritesListComponent>
				)}

				<Spacer type="vertical" />
			</VisitedSectionComponent>
		</Dropdown>
	)
}
