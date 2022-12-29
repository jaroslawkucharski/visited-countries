import { Button, Heading } from 'components'
import { useThemeColorContext } from 'context/ThemeContext'
import { useTranslation } from 'react-i18next'
import { HiMoon, HiSun } from 'react-icons/hi'
import { Column, Row } from 'simple-flexbox'

export const Login = () => {
	const { t, i18n } = useTranslation()

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

	const langChange = () => i18n.changeLanguage('pl')

	return (
		<Column
			horizontal="center"
			vertical="center"
			style={{ ...colummStyles }}
		>
			<Heading>{t('pages.login.heading')}</Heading>
			<Heading level={2}>{t('pages.login.description')}</Heading>

			<Row
				horizontal="center"
				style={{ ...rowStyles }}
			>
				<Button
					action={() => langChange()}
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
	)
}
