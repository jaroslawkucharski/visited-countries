import { THEME_COLORS } from 'constants/theme'

export const themeDetector = () => {
	const isDarkTheme = window.matchMedia(`(prefers-color-scheme: ${THEME_COLORS.DARK})`).matches

	return isDarkTheme ? THEME_COLORS.DARK : THEME_COLORS.LIGHT
}
