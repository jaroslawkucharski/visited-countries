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
import { useCountriesListContext } from 'context/CountriesListContext'
import { useThemeColorContext } from 'context/ThemeContext'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import {
	TbBell,
	TbEdit,
	TbHelp,
	TbLogout,
	TbMapPin,
	TbPlane,
	TbSettings,
	TbUser,
} from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from 'services/auth'
import { v4 as uuid } from 'uuid'

import { hideLogo } from 'helpers/hideLogo'

import { useService } from 'hooks/useService'
import { useWindowSize } from 'hooks/useWindowSize'

import { ROUTES } from 'constants/routes'
import { THEME_COLORS } from 'constants/theme'

import { SettingsComponent, TopBarComponent, VisitedSectionComponent } from './TopBar.styles'

export const TopBar = () => {
	const { t } = useTranslation()

	const { theme } = useThemeColorContext()
	const { userAuth } = useAuthContext()
	const { countries, visitedList } = useCountriesListContext()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const { isMobile } = useWindowSize()

	const { currentUser } = auth

	const { request } = useService({
		service: logout,
		successCallback: () => navigate(ROUTES.SIGNIN),
	})

	const handleLogout = () => request()

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
					<Button variant="icon">
						<TbHelp />
					</Button>

					<Dropdown
						label={<TbBell />}
						customButtonProps={{ variant: 'icon' }}
						hasChevron={false}
						dropdownWith={100}
					>
						News
					</Dropdown>

					<Dropdown
						label={
							<>
								{currentUser?.photoURL ? (
									<Image
										src={currentUser?.photoURL}
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
							<div className="quantity">
								<Paragraph
									type="dropdown"
									size="s36"
								>
									<TbMapPin />
								</Paragraph>

								<Paragraph
									type="dropdown"
									align="left"
									size="s14"
								>
									{t('dropdown.countries.info', {
										visited: countries.length,
										countries: visitedList.length,
									})}
								</Paragraph>
							</div>

							<Spacer
								space="tiny"
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
									{`${(100 * visitedList.length) / countries.length}%`}
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
							to={ROUTES.PROFILE}
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
