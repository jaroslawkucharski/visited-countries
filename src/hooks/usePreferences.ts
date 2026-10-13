import { useThemeColorContext } from 'context/ThemeContext'
import { useTranslation } from 'react-i18next'

import { LOCALES, LocalLanguages } from 'constants/locales'
import { THEME_COLORS } from 'constants/theme'

export const usePreferences = () => {
	const { i18n } = useTranslation()
	const { theme, toggleTheme } = useThemeColorContext()

	const isDark = theme === THEME_COLORS.DARK
	const language = i18n.language === LOCALES.EN ? LOCALES.EN : LOCALES.PL

	const changeLanguage = (value: LocalLanguages) => i18n.changeLanguage(value)

	const toggleLanguage = () => changeLanguage(language === LOCALES.EN ? LOCALES.PL : LOCALES.EN)

	const setDarkTheme = (dark: boolean) => dark !== isDark && toggleTheme()

	return { isDark, language, toggleTheme, setDarkTheme, changeLanguage, toggleLanguage }
}
