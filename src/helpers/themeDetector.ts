import { THEME_COLOR } from '../constants/themeColor'

export const themeDetector = () => {
	const isDarkTheme = window.matchMedia(`(prefers-color-scheme: ${THEME_COLOR.DARK})`).matches

	return isDarkTheme ? THEME_COLOR.DARK : THEME_COLOR.LIGHT
}
