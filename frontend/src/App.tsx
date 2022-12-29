import { useThemeColorContext } from 'context/ThemeContext'
import { Login } from 'pages'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/global'

const App = () => {
	const { themeColor } = useThemeColorContext()

	return (
		<ThemeProvider theme={themeColor}>
			<GlobalStyles />

			<Login />
		</ThemeProvider>
	)
}

export default App
