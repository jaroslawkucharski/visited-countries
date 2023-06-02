import NiceModal from '@ebay/nice-modal-react'
import { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../GlobalStyles'
import { ToastStyles } from '../ToastStyles'
import { darkTheme, lightTheme } from '../theme'

export interface ThemeProps {
	theme?: 'dark' | 'light'
	children: ReactNode
}

export const Theme: FC<ThemeProps> = ({ theme = 'dark', children }) => {
	const appTheme = theme === 'dark' ? darkTheme : lightTheme

	return (
		<ThemeProvider theme={appTheme}>
			<GlobalStyles />
			<ToastContainer theme={theme} />
			<ToastStyles />

			<NiceModal.Provider>{children}</NiceModal.Provider>
		</ThemeProvider>
	)
}
