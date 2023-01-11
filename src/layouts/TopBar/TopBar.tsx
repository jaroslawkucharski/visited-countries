import en from 'assets/images/locales/en.svg'
import pl from 'assets/images/locales/pl.svg'
import LogoDark from 'assets/images/logo_dark.svg'
import LogoLight from 'assets/images/logo_light.svg'
import { Button, Dropdown, Image, Spacer } from 'components'
import { auth } from 'config/firebase'
import { useAuthContext } from 'context/AuthContext'
import { useThemeColorContext } from 'context/ThemeContext'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMoon, HiOutlineLogout, HiSun, HiUserCircle } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'
import { v4 as uuid } from 'uuid'

import { useWindowSize } from 'hooks/useWindowSize'

import { BREAKPOINTS } from 'constants/breakpoints'
import { LOCALES } from 'constants/locales'
import { THEME_COLORS } from 'constants/theme'

import { SettingsComponent, TopBarComponent } from './TopBar.styles'

export const TopBar = () => {
	const { t, i18n } = useTranslation()
	const { theme, toggleTheme } = useThemeColorContext()
	const { userAuth, logout } = useAuthContext()
	const navigate = useNavigate()

	const { width } = useWindowSize()

	const handleLanguageChangeToPL = useCallback(
		() =>
			i18n.language === LOCALES.EN
				? i18n.changeLanguage(LOCALES.PL)
				: i18n.changeLanguage(LOCALES.EN),
		[i18n],
	)
	const handleThemeColorChange = useCallback(() => toggleTheme(), [toggleTheme])

	const handleLogout = useCallback(() => logout(), [logout])

	const handleSignIn = useCallback(() => navigate(ROUTES.SIGNIN), [navigate])

	const handleSignUp = useCallback(() => navigate(ROUTES.SIGNUP), [navigate])

	return (
		<TopBarComponent>
			<Image
				src={theme === THEME_COLORS.DARK ? LogoDark : LogoLight}
				width={250}
				alt={t('word.logo')}
			/>

			{!userAuth && (
				<SettingsComponent>
					{width > BREAKPOINTS.MOBILE && (
						<>
							<Button
								variant="primary"
								action={handleSignIn}
							>
								Sign In
							</Button>

							<Button
								variant="secondary"
								action={handleSignUp}
							>
								Sign Up
							</Button>
						</>
					)}
				</SettingsComponent>
			)}

			{userAuth && width > BREAKPOINTS.MOBILE && (
				<Dropdown text={auth?.currentUser?.displayName || t('word.account')}>
					<Dropdown.Item
						key={uuid()}
						to="/"
					>
						<HiUserCircle /> {t('word.account.data')}
					</Dropdown.Item>

					<Dropdown.Item
						key={uuid()}
						action={handleLogout}
					>
						<HiOutlineLogout /> {t('word.logout')}
					</Dropdown.Item>

					<Spacer
						type="vertical"
						space="small"
					/>

					<SettingsComponent>
						<Button
							variant="secondary"
							action={handleThemeColorChange}
							hasOnlyIcon
						>
							{theme === 'dark' ? <HiSun /> : <HiMoon />}
						</Button>

						<Button
							variant="secondary"
							action={handleLanguageChangeToPL}
							hasOnlyIcon
						>
							{i18n.language === LOCALES.EN ? (
								<Image
									src={en}
									width={16}
									alt="en"
								/>
							) : (
								<Image
									src={pl}
									width={16}
									alt="pl"
								/>
							)}
						</Button>
					</SettingsComponent>
				</Dropdown>
			)}
		</TopBarComponent>
	)
}
