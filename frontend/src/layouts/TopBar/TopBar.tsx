import { Button } from 'components'
import { useThemeColorContext } from 'context/ThemeContext'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMoon, HiSun } from 'react-icons/hi'

import { TopBarComponent } from './TopBar.styles'

export const TopBar = () => {
	const { i18n } = useTranslation()

	const { theme, toggleTheme } = useThemeColorContext()

	const handleLanguageChangeToEN = useCallback(() => i18n.changeLanguage('en-US'), [])

	const handleLanguageChangeToPL = useCallback(() => i18n.changeLanguage('pl-PL'), [])

	const handleThemeColorChange = useCallback(() => toggleTheme(), [])

	return (
		<TopBarComponent horizontal="center">
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
		</TopBarComponent>
	)
}
