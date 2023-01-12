import { FC, ReactNode, createContext, useContext, useEffect } from 'react'
import { themeDetector } from 'utils/themeDetector'

import { useLocalStorage } from 'hooks/useLocalstorage'

import { THEME_COLORS, ThemeColors } from 'constants/theme'

import { darkTheme, lightTheme } from 'styles/theme'

type ThemeContextType = ReturnType<typeof useColorTheme>

const ThemeContext = createContext<ThemeContextType | null>(null)

const useColorTheme = () => {
	const localTheme = themeDetector()

	const [theme, setTheme] = useLocalStorage<ThemeColors>('theme')

	const toggleTheme = () =>
		setTheme(prev => (prev === THEME_COLORS.DARK ? THEME_COLORS.LIGHT : THEME_COLORS.DARK))

	useEffect(() => (!theme ? setTheme(localTheme) : undefined), [theme, setTheme, localTheme])

	const themeColor = theme === THEME_COLORS.DARK ? darkTheme : lightTheme

	return {
		theme,
		themeColor,
		toggleTheme,
	}
}

type ProviderProps = {
	children: ReactNode
}

export const ThemeColorProvider: FC<ProviderProps> = ({ children }) => {
	const value = useColorTheme()

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useThemeColorContext = () => {
	const value = useContext(ThemeContext)

	if (!value) {
		throw new Error('useThemeSContext must be used inside ThemeProvider!')
	}

	return value
}
