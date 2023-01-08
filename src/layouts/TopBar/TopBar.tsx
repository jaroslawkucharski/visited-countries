import en from 'assets/images/locales/en.svg'
import pl from 'assets/images/locales/pl.svg'
import LogoDark from 'assets/images/logo_dark.svg'
import LogoLight from 'assets/images/logo_light.svg'
import { Button, Dropdown, Image, Spacer } from 'components'
import { useAuthContext } from 'context/AuthContext'
import { useThemeColorContext } from 'context/ThemeContext'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMoon, HiOutlineLogout, HiSun, HiUserCircle } from 'react-icons/hi'
import { v4 as uuid } from 'uuid'

import { LOCALES } from 'constants/locales'
import { THEME_COLORS } from 'constants/theme'

import { SettingsComponent, SettingsMobileComponent, TopBarComponent } from './TopBar.styles'

export const TopBar = () => {
	const { t, i18n } = useTranslation()
	const { theme, toggleTheme } = useThemeColorContext()
	const { userAuth, logout } = useAuthContext()

	const handleLanguageChangeToPL = useCallback(
		() =>
			i18n.language === LOCALES.EN
				? i18n.changeLanguage(LOCALES.PL)
				: i18n.changeLanguage(LOCALES.EN),
		[i18n],
	)
	const handleThemeColorChange = useCallback(() => toggleTheme(), [toggleTheme])

	const handleLogout = useCallback(() => logout(), [logout])

	return (
		<TopBarComponent>
			<Image
				src={theme === THEME_COLORS.DARK ? LogoDark : LogoLight}
				width={250}
				alt={t('word.logo')}
			/>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<SettingsComponent>
				{!userAuth && (
					<>
						<SettingsMobileComponent>
							<Button
								variant="primary"
								action={handleLogout}
							>
								Sign In
							</Button>

							<Button
								variant="secondary"
								action={handleLogout}
							>
								Sign Up
							</Button>
						</SettingsMobileComponent>

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
									<img
										src={en}
										width={16}
										alt="en"
									/>
								) : (
									<img
										src={pl}
										width={16}
										alt="pl"
									/>
								)}
							</Button>
						</SettingsComponent>
					</>
				)}

				{userAuth && (
					<Dropdown text={t('word.account')}>
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
			</SettingsComponent>
		</TopBarComponent>
	)
}
