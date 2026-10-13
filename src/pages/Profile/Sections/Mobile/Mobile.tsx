import { Break, Button, Spacer } from 'components'
import { useThemeColorContext } from 'context/ThemeContext'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import { logout } from 'services/auth'
import { showHelpModal } from 'utils'

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

	const handleOpenSettings = useCallback(() => navigate(ROUTES.SETTINGS), [navigate])

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
					aria-label={String(t('word.theme.toggle'))}
				>
					{theme === 'dark' ? <HiSun /> : <HiMoon />}
				</Button>

				<Button
					variant="icon"
					onClick={handleLanguageChangeToPL}
					aria-label={String(t('word.language.toggle'))}
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
				variant="secondary"
				onClick={handleOpenSettings}
				hasFullWidth
			>
				{t('word.settings')}
			</Button>

			<Spacer type="vertical" />

			<Button
				variant="secondary"
				onClick={showHelpModal}
				hasFullWidth
			>
				{t('word.help')}
			</Button>

			<Spacer type="vertical" />

			<Button
				onClick={handleLogout}
				hasFullWidth
			>
				{t('word.logout')}
			</Button>
		</>
	)
}
