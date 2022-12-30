import LogoDark from 'assets/images/logo_dark.svg'
import LogoLight from 'assets/images/logo_light.svg'
import { Button } from 'components'
import { useThemeColorContext } from 'context/ThemeContext'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMoon, HiSun } from 'react-icons/hi'

import { SettingsComponent, TopBarComponent } from './TopBar.styles'

export const TopBar = () => {
	const { i18n } = useTranslation()

	const { theme, toggleTheme } = useThemeColorContext()

	const handleLanguageChangeToEN = useCallback(() => i18n.changeLanguage('en-US'), [i18n])

	const handleLanguageChangeToPL = useCallback(() => i18n.changeLanguage('pl-PL'), [i18n])

	const handleThemeColorChange = useCallback(() => toggleTheme(), [toggleTheme])

	return (
		<TopBarComponent>
			<img
				src={theme === 'dark' ? LogoDark : LogoLight}
				width="170"
				alt="logo"
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
					action={handleLanguageChangeToEN}
					hasOnlyIcon
				>
					EN
				</Button>

				<Button
					variant="secondary"
					action={handleLanguageChangeToPL}
					hasOnlyIcon
				>
					PL
				</Button>
			</SettingsComponent>
		</TopBarComponent>
	)
}
