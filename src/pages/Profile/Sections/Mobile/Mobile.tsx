import { Break, Button, Link, Spacer } from 'components'
import { useThemeColorContext } from 'context/ThemeContext'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import { logout } from 'services/auth'

import { getLanguageImage } from 'helpers/languageDetector'

import { useService } from 'hooks/useService'

import { LOCALES } from 'constants/locales'
import { ROUTES } from 'constants/routes'

import { MobileComponent } from './Mobile.styles'

export const Mobile = () => {
	const { t, i18n } = useTranslation()
	const navigate = useNavigate()

	const { theme, toggleTheme } = useThemeColorContext()

	const { request } = useService({
		service: logout,
		successCallback: () => navigate(ROUTES.SIGNIN),
	})

	const handleLogout = () => request()

	const handleLanguageChangeToPL = useCallback(
		() =>
			i18n.language === LOCALES.EN
				? i18n.changeLanguage(LOCALES.PL)
				: i18n.changeLanguage(LOCALES.EN),
		[i18n],
	)

	const handleThemeColorChange = useCallback(() => toggleTheme(), [toggleTheme])

	return (
		<>
			<Spacer
				type="vertical"
				space="big"
			/>

			<Break />

			<Spacer type="vertical" />
			<MobileComponent>
				<Button
					variant="icon"
					onClick={handleThemeColorChange}
				>
					{theme === 'dark' ? <HiSun /> : <HiMoon />}
				</Button>

				<Button
					variant="icon"
					onClick={handleLanguageChangeToPL}
				>
					{getLanguageImage()}
				</Button>
			</MobileComponent>

			<Spacer type="vertical" />

			<Break />

			<Spacer
				type="vertical"
				space="big"
			/>

			<Button
				onClick={handleLogout}
				hasFullWidth
			>
				{t('word.logout')}
			</Button>

			<Spacer type="vertical" />

			<Link to={`mailto:${t('help.email')}?subject=${t('help.subject')}&body=${t('help.body')}`}>
				{t('word.help')}
			</Link>
		</>
	)
}
