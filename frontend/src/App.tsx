import { HiMoon, HiSun } from 'react-icons/hi'
import { Column, Row } from 'simple-flexbox'
import { ThemeProvider } from 'styled-components'

import { Button } from 'components/ui'

import { useThemeColorContext } from './context/ThemeContext'
import { GlobalStyles } from './styles/global'

const App = () => {
	const { theme, themeColor, toggleTheme } = useThemeColorContext()

	const colummStyles = {
		paddingBottom: 80,
		margin: '0 auto',
		width: 500,
		height: '100vh',
		gap: 10,
	}

	const rowStyles = {
		gap: 10,
	}

	return (
		<ThemeProvider theme={themeColor}>
			<GlobalStyles />

			<Column
				horizontal="center"
				vertical="center"
				style={{ ...colummStyles }}
			>
				<p className="read-the-docs">Hello world!</p>

				<Row style={{ ...rowStyles }}>
					<Button action={() => null}>{theme === 'dark' ? <HiSun /> : <HiMoon />} Log In</Button>

					<Button
						variant="secondary"
						action={() => toggleTheme()}
						hasOnlyIcon
					>
						{theme === 'dark' ? <HiSun /> : <HiMoon />}
					</Button>
				</Row>
			</Column>
			<div />
		</ThemeProvider>
	)
}

export default App
