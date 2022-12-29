import { useThemeColorContext } from 'context/ThemeContext'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/global'

const App = () => {
	const { themeColor } = useThemeColorContext()

	return (
		<ThemeProvider theme={themeColor}>
			<GlobalStyles />
		</ThemeProvider>
	)
}

export default App
