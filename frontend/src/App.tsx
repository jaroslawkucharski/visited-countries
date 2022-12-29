import { HiMoon, HiSun } from 'react-icons/hi'
import { Column, Row } from 'simple-flexbox'
import { ThemeProvider } from 'styled-components'

import { Button, Heading } from 'components/ui'

import { useThemeColorContext } from './context/ThemeContext'
import { GlobalStyles } from './styles/global'

const App = () => {
	const { theme, themeColor, toggleTheme } = useThemeColorContext()

	const colummStyles = {
		paddingBottom: 80,
		margin: '0 auto',
		width: 300,
		height: '100vh',
		gap: 10,
	}

	const rowStyles = {
		width: '100%',
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
				<Heading>Log in!</Heading>
				<Heading level={2}>Welcome in Visited Countries app.</Heading>

				<Row
					horizontal="center"
					style={{ ...rowStyles }}
				>
					<Button
						action={() => null}
						hasFullWidth
					>
						{theme === 'dark' ? <HiSun /> : <HiMoon />} Log In
					</Button>
				</Row>
				<Row
					horizontal="center"
					style={{ ...rowStyles }}
				>
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
