import LogoDark from 'assets/images/logo_dark.svg'
import LogoLight from 'assets/images/logo_light.svg'
import {
	Break,
	Button,
	Dropdown,
	DropdownItem,
	Image,
	Paragraph,
	ProgressBar,
	Spacer,
} from 'components'
import { auth } from 'config/firebase'
import { useAuthContext } from 'context/AuthContext'
import { CountriesListType, useCountriesListContext } from 'context/CountriesListContext'
import { useThemeColorContext } from 'context/ThemeContext'
import { CHANGELOG } from 'data/changelog'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import {
	TbBell,
	TbCirclePlus,
	TbEdit,
	TbHeart,
	TbHeartOff,
	TbHelp,
	TbLogout,
	TbMapPin,
	TbNews,
	TbPlane,
	TbSettings,
	TbUser,
} from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from 'services/auth'
import { removeFavorite, setCountry } from 'services/user'
import { showAddCountryModal, showHelpModal, toastNotify } from 'utils'
import { v4 as uuid } from 'uuid'

import { hideLogo } from 'helpers/hideLogo'
import { languageDetector } from 'helpers/languageDetector'

import { useReadNews } from 'hooks/useReadNews'
import { useService } from 'hooks/useService'
import { useUserAvatar } from 'hooks/useUserAvatar'
import { useWindowSize } from 'hooks/useWindowSize'

import { LOCALES } from 'constants/locales'
import { ROUTES } from 'constants/routes'
import { THEME_COLORS } from 'constants/theme'

import {
	BellComponent,
	FavoritesListComponent,
	MonthsComponent,
	NewsListComponent,
	SettingsComponent,
	TopBarComponent,
	VisitedSectionComponent,
} from './TopBar.styles'

export const TopBar = () => {
	const { t, i18n } = useTranslation()

	const { theme } = useThemeColorContext()
	const { userAuth } = useAuthContext()
	const { countries, visitedList, visitedCountries, favoriteList, fetchCountriesList } =
		useCountriesListContext()

	const handleRemoveFavorite = async (code?: string) => {
		if (!code) return

		try {
			await removeFavorite(code)

			toastNotify(t('toasts.favorite.removed'), 'success')

			fetchCountriesList()
		} catch {
			toastNotify(t('toasts.error'), 'error')
		}
	}
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const { isMobile } = useWindowSize()

	const avatar = useUserAvatar()

	const { request } = useService({
		service: logout,
		successCallback: () => navigate(ROUTES.SIGNIN),
	})

	const handleLogout = () => request()

	const { readIds, markAsRead, markAllAsRead } = useReadNews()
	const unreadNews = CHANGELOG.filter(({ id }) => !readIds.includes(id))
	const newsLocale = i18n.language === LOCALES.EN ? 'en' : 'pl'

	const showAddFavoriteToVisited = (country?: CountriesListType) =>
		country?.code &&
		showAddCountryModal({
			icon: country.icon,
			name: String(languageDetector(country.nameEN, country.namePL)),
			onConfirm: async visitedAt => {
				try {
					await setCountry(country.code as string, String(country.nameEN), visitedAt)

					toastNotify(t('toasts.add.country'), 'success')

					fetchCountriesList()
				} catch {
					toastNotify(t('toasts.error'), 'error')
				}
			},
		})

	const visitedPercent = countries?.length
		? Math.round((1000 * visitedList.length) / countries.length) / 10
		: 0

	const currentYear = String(new Date().getFullYear())
	const visitedThisYear = visitedCountries.filter(({ visitedAt }) =>
		visitedAt?.startsWith(currentYear),
	)
	const monthsWithVisits = Array.from({ length: 12 }, (_, index) =>
		visitedThisYear.some(
			({ visitedAt }) => visitedAt === `${currentYear}-${String(index + 1).padStart(2, '0')}`,
		),
	)
	const monthLabel = (index: number) => {
		const label = new Date(2000, index, 1).toLocaleDateString(i18n.language, { month: 'long' })

		return label.charAt(0).toUpperCase() + label.slice(1)
	}

	const handleSignIn = useCallback(() => navigate(ROUTES.SIGNIN), [navigate])

	const handleSignUp = useCallback(() => navigate(ROUTES.SIGNUP), [navigate])

	const handleNavigateToMainPage = useCallback(() => navigate(ROUTES.DASHBOARD), [navigate])

	return hideLogo(pathname) && isMobile ? null : (
		<TopBarComponent>
			<Image
				src={theme === THEME_COLORS.DARK ? LogoDark : LogoLight}
				width={250}
				alt={t('word.logo')}
				onClick={handleNavigateToMainPage}
			/>

			{!userAuth && !isMobile && (
				<SettingsComponent>
					<Button
						variant="primary"
						onClick={handleSignIn}
						data-testid="button-signin"
					>
						{t('word.signin')}
					</Button>

					<Button
						variant="secondary"
						onClick={handleSignUp}
						data-testid="button-signup"
					>
						{t('word.signup')}
					</Button>
				</SettingsComponent>
			)}

			{userAuth && !isMobile && (
				<SettingsComponent>
					<Button
						variant="icon"
						onClick={showHelpModal}
						data-testid="button-help"
					>
						<TbHelp />
					</Button>

					<Dropdown
						label={
							<BellComponent data-testid="button-favorites">
								<TbHeart />

								{favoriteList.length > 0 && <span className="count">{favoriteList.length}</span>}
							</BellComponent>
						}
						customButtonProps={{ variant: 'icon' }}
						hasChevron={false}
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
											<span>
												{`${country?.icon} ${languageDetector(country?.nameEN, country?.namePL)}`}
											</span>

											<div className="actions">
												<button
													type="button"
													title={String(t('favorites.remove'))}
													onClick={() => handleRemoveFavorite(country?.code)}
												>
													<TbHeartOff />
												</button>

												<button
													type="button"
													title={String(t('word.add.country'))}
													onClick={() => showAddFavoriteToVisited(country)}
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

					<Dropdown
						label={
							<BellComponent data-testid="button-news">
								<TbBell />

								{unreadNews.length > 0 && <span className="count">{unreadNews.length}</span>}
							</BellComponent>
						}
						customButtonProps={{ variant: 'icon' }}
						hasChevron={false}
						dropdownWith={100}
						dropdownContentWith="340px"
					>
						<VisitedSectionComponent>
							<Paragraph type="dropdown">
								<TbNews /> {t('news.title').toUpperCase()}
							</Paragraph>

							<Spacer
								space="mini"
								type="vertical"
							/>

							{unreadNews.length === 0 ? (
								<Paragraph
									type="dropdown"
									align="left"
									size="s12"
								>
									{t('news.empty')}
								</Paragraph>
							) : (
								<>
									<Paragraph
										type="dropdown"
										align="left"
										size="s12"
									>
										{t('news.hint')}
									</Paragraph>

									<NewsListComponent data-testid="news-list">
										{unreadNews.map(entry => (
											<li key={entry.id}>
												<button
													type="button"
													onClick={event => {
														event.stopPropagation()
														markAsRead(entry.id)
													}}
													data-testid="news-entry"
												>
													<strong>{entry.title[newsLocale]}</strong>

													<span className="date">
														{new Date(entry.date).toLocaleDateString(i18n.language)}
													</span>

													<span>{entry.text[newsLocale]}</span>
												</button>
											</li>
										))}
									</NewsListComponent>

									<button
										type="button"
										className="mark-all"
										onClick={() => markAllAsRead(unreadNews.map(({ id }) => id))}
										data-testid="news-mark-all"
									>
										{t('news.mark.all')}
									</button>
								</>
							)}

							<Spacer type="vertical" />
						</VisitedSectionComponent>
					</Dropdown>

					<Dropdown
						label={
							<>
								{avatar ? (
									<Image
										src={avatar}
										alt={t('word.avatar')}
										variant="avatar"
										width={18}
										height={18}
									/>
								) : (
									<TbUser />
								)}

								{auth?.currentUser?.displayName || t('word.account')}
							</>
						}
					>
						<VisitedSectionComponent>
							<Paragraph type="dropdown">
								<TbMapPin /> {t('stats.title').toUpperCase()}
							</Paragraph>

							<Spacer
								space="mini"
								type="vertical"
							/>

							<div className="quantity">
								<Paragraph
									type="dropdown"
									align="left"
									size="s12"
								>
									{t('stats.countries.visited.title')}
								</Paragraph>

								<Paragraph
									type="dropdown"
									align="left"
									size="s12"
								>
									{t('stats.countries.visited.value', {
										visited: visitedList.length,
										countries: countries.length,
									})}
								</Paragraph>
							</div>

							<Spacer
								space="mini"
								type="vertical"
							/>

							<ProgressBar
								limit={countries.length}
								value={visitedList.length}
							/>

							<div className="quantity">
								<Paragraph
									type="dropdown"
									size="s12"
								>
									{`${visitedPercent}%`}
								</Paragraph>

								<Paragraph
									type="dropdown"
									size="s12"
								>
									<TbPlane />
								</Paragraph>

								<Paragraph
									type="dropdown"
									size="s12"
								>
									100%
								</Paragraph>
							</div>

							<Spacer
								space="small"
								type="vertical"
							/>

							<div className="quantity">
								<Paragraph
									type="dropdown"
									align="left"
									size="s12"
								>
									{t('stats.this.year')}
								</Paragraph>

								<Paragraph
									type="dropdown"
									align="left"
									size="s12"
								>
									{visitedThisYear.length}
								</Paragraph>
							</div>

							<Spacer
								space="mini"
								type="vertical"
							/>

							<MonthsComponent data-testid="months-bar">
								{monthsWithVisits.map((hasVisit, index) => (
									<span
										// eslint-disable-next-line react/no-array-index-key
										key={index}
										className={hasVisit ? 'month visited' : 'month'}
										title={monthLabel(index)}
									/>
								))}
							</MonthsComponent>

							<div className="quantity">
								<Paragraph
									type="dropdown"
									size="s12"
								>
									{monthLabel(0)}
								</Paragraph>

								<Paragraph
									type="dropdown"
									size="s12"
								>
									<TbPlane />
								</Paragraph>

								<Paragraph
									type="dropdown"
									size="s12"
								>
									{monthLabel(11)}
								</Paragraph>
							</div>

							<Spacer
								space="small"
								type="vertical"
							/>
						</VisitedSectionComponent>

						<Break />

						<DropdownItem
							key={uuid()}
							to={ROUTES.PROFILE}
						>
							<TbEdit />

							{t('word.profile')}
						</DropdownItem>

						<DropdownItem
							key={uuid()}
							to={ROUTES.SETTINGS}
						>
							<TbSettings />

							{t('word.settings')}
						</DropdownItem>

						<Break />

						<DropdownItem
							key={uuid()}
							action={handleLogout}
						>
							<TbLogout />

							{t('word.logout')}
						</DropdownItem>
					</Dropdown>
				</SettingsComponent>
			)}
		</TopBarComponent>
	)
}
