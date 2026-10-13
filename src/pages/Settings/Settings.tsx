import { profileImage } from 'assets/images/pages'
import { Button, Heading, Layout, Paragraph, Spacer } from 'components'
import { useThemeColorContext } from 'context/ThemeContext'
import { useTranslation } from 'react-i18next'
import { HiArrowLeft, HiMoon, HiSun } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

import { useWindowSize } from 'hooks/useWindowSize'

import { LOCALES } from 'constants/locales'
import { ROUTES } from 'constants/routes'
import { THEME_COLORS } from 'constants/theme'

import { SettingsRowComponent, SettingsSectionComponent } from './Settings.styles'

export const Settings = () => {
	const { t, i18n } = useTranslation()
	const { theme, toggleTheme } = useThemeColorContext()

	const { isMobile } = useWindowSize()
	const navigate = useNavigate()

	const isDark = theme === THEME_COLORS.DARK

	return (
		<Layout image={profileImage}>
			<Heading>{t('word.settings')}</Heading>

			<Spacer type="vertical" />

			<SettingsSectionComponent>
				<Paragraph
					type="label"
					align="left"
				>
					{t('word.appearance')}
				</Paragraph>

				<SettingsRowComponent>
					<Button
						variant={isDark ? 'primary' : 'secondary'}
						onClick={() => !isDark && toggleTheme()}
						data-testid="theme-dark"
						hasFullWidth
					>
						<HiMoon /> {t('word.theme.dark')}
					</Button>

					<Button
						variant={isDark ? 'secondary' : 'primary'}
						onClick={() => isDark && toggleTheme()}
						data-testid="theme-light"
						hasFullWidth
					>
						<HiSun /> {t('word.theme.light')}
					</Button>
				</SettingsRowComponent>

				<Paragraph
					type="label"
					align="left"
				>
					{t('word.language')}
				</Paragraph>

				<SettingsRowComponent>
					<Button
						variant={i18n.language === LOCALES.PL ? 'primary' : 'secondary'}
						onClick={() => i18n.changeLanguage(LOCALES.PL)}
						data-testid="language-pl"
						hasFullWidth
					>
						Polski
					</Button>

					<Button
						variant={i18n.language === LOCALES.EN ? 'primary' : 'secondary'}
						onClick={() => i18n.changeLanguage(LOCALES.EN)}
						data-testid="language-en"
						hasFullWidth
					>
						English
					</Button>
				</SettingsRowComponent>
			</SettingsSectionComponent>

			{isMobile && (
				<>
					<Spacer
						type="vertical"
						space="big"
					/>

					<Button
						variant="secondary"
						onClick={() => navigate(ROUTES.PROFILE)}
						data-testid="settings-back"
						hasFullWidth
					>
						<HiArrowLeft /> {t('word.back.profile')}
					</Button>
				</>
			)}
		</Layout>
	)
}
