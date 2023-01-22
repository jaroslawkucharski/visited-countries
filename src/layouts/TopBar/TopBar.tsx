import LogoDark from 'assets/images/logo_dark.svg'
import LogoLight from 'assets/images/logo_light.svg'
import { Break, Button, Dropdown, DropdownItem, Image } from 'components'
import { auth } from 'config/firebase'
import { useAuthContext } from 'context/AuthContext'
import { useThemeColorContext } from 'context/ThemeContext'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HiArrowRightOnRectangle, HiQuestionMarkCircle, HiUserCircle } from 'react-icons/hi2'
import { useLocation, useNavigate } from 'react-router-dom'
import { logout } from 'services/auth'
import { v4 as uuid } from 'uuid'

import { hideLogo } from 'helpers/hideLofo'

import { useService } from 'hooks/useService'
import { useWindowSize } from 'hooks/useWindowSize'

import { BREAKPOINTS } from 'constants/breakpoints'
import { ROUTES } from 'constants/routes'
import { THEME_COLORS } from 'constants/theme'

import { SettingsComponent, TopBarComponent } from './TopBar.styles'

export const TopBar = () => {
	const { t } = useTranslation()
	const { theme } = useThemeColorContext()
	const { userAuth } = useAuthContext()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const { width } = useWindowSize()

	const { request } = useService({
		service: logout,
		successCallback: () => navigate(ROUTES.SIGNIN),
	})

	const handleLogout = () => request()

	const handleSignIn = useCallback(() => navigate(ROUTES.SIGNIN), [navigate])

	const handleSignUp = useCallback(() => navigate(ROUTES.SIGNUP), [navigate])

	return (
		<TopBarComponent>
			{hideLogo(pathname) && width <= BREAKPOINTS.MOBILE ? null : (
				<Image
					src={theme === THEME_COLORS.DARK ? LogoDark : LogoLight}
					width={250}
					alt={t('word.logo')}
				/>
			)}

			{!userAuth && width > BREAKPOINTS.MOBILE && (
				<SettingsComponent>
					<Button
						variant="primary"
						action={handleSignIn}
						data-testid="button-signin"
					>
						{t('word.signin')}
					</Button>
					<Button
						variant="secondary"
						action={handleSignUp}
						data-testid="button-signup"
					>
						{t('word.signup')}
					</Button>
				</SettingsComponent>
			)}

			{userAuth && width > BREAKPOINTS.MOBILE && (
				<Dropdown text={auth?.currentUser?.displayName || t('word.account')}>
					<DropdownItem
						key={uuid()}
						to={ROUTES.PROFILE}
					>
						<HiUserCircle /> {t('word.profile')}
					</DropdownItem>

					<DropdownItem
						key={uuid()}
						to={ROUTES.HELP}
					>
						<HiQuestionMarkCircle /> {t('word.help')}
					</DropdownItem>

					<Break />

					<DropdownItem
						key={uuid()}
						action={handleLogout}
						isLastItem
					>
						<HiArrowRightOnRectangle /> {t('word.logout')}
					</DropdownItem>
				</Dropdown>
			)}
		</TopBarComponent>
	)
}
