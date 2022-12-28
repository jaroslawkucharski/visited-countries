import { FC, ReactNode, createContext, useContext, useEffect } from 'react'

import { themeDetector } from 'helpers/themeDetector'

import { useLocalStorage } from 'hooks/useLocalstorage'

import { THEME_COLOR } from 'constants/themeColor'

import { darkTheme, lightTheme } from 'styles/theme'

type ThemeContextType = ReturnType<typeof useColorTheme>

const ThemeContext = createContext<ThemeContextType | null>(null)

const useColorTheme = () => {
	const localTheme = themeDetector()

	const [theme, setTheme] = useLocalStorage<string>('theme')

	const toggleTheme = () =>
		setTheme(prev => (prev === THEME_COLOR.DARK ? THEME_COLOR.LIGHT : THEME_COLOR.DARK))

	useEffect(() => (!theme ? setTheme(localTheme) : undefined), [theme, setTheme, localTheme])

	const themeColor = theme === THEME_COLOR.DARK ? darkTheme : lightTheme

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
