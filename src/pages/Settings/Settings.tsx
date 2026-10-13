import { profileImage } from 'assets/images/pages'
import { Button, Heading, Layout, Paragraph, Spacer } from 'components'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { HiArrowLeft, HiMoon, HiSun } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

import { usePreferences } from 'hooks/usePreferences'
import { useWindowSize } from 'hooks/useWindowSize'

import { LOCALES } from 'constants/locales'
import { ROUTES } from 'constants/routes'

import { SettingsRowComponent, SettingsSectionComponent } from './Settings.styles'

interface SettingsOption {
	label: ReactNode
	isSelected: boolean
	onSelect: () => void
	testId: string
}

export const Settings = () => {
	const { t } = useTranslation()
	const { isMobile } = useWindowSize()
	const navigate = useNavigate()
	const { isDark, setDarkTheme, language, changeLanguage } = usePreferences()

	const sections: { title: string; options: SettingsOption[] }[] = [
		{
			title: String(t('word.appearance')),
			options: [
				{
					label: (
						<>
							<HiMoon /> {t('word.theme.dark')}
						</>
					),
					isSelected: isDark,
					onSelect: () => setDarkTheme(true),
					testId: 'theme-dark',
				},
				{
					label: (
						<>
							<HiSun /> {t('word.theme.light')}
						</>
					),
					isSelected: !isDark,
					onSelect: () => setDarkTheme(false),
					testId: 'theme-light',
				},
			],
		},
		{
			title: String(t('word.language')),
			options: [
				{
					label: 'Polski',
					isSelected: language === LOCALES.PL,
					onSelect: () => changeLanguage(LOCALES.PL),
					testId: 'language-pl',
				},
				{
					label: 'English',
					isSelected: language === LOCALES.EN,
					onSelect: () => changeLanguage(LOCALES.EN),
					testId: 'language-en',
				},
			],
		},
	]

	return (
		<Layout image={profileImage}>
			<Heading>{t('word.settings')}</Heading>

			<Spacer type="vertical" />

			<SettingsSectionComponent>
				{sections.map(({ title, options }) => (
					<SettingsSectionComponent key={title}>
						<Paragraph
							type="label"
							align="left"
						>
							{title}
						</Paragraph>

						<SettingsRowComponent>
							{options.map(({ label, isSelected, onSelect, testId }) => (
								<Button
									key={testId}
									variant={isSelected ? 'primary' : 'secondary'}
									onClick={onSelect}
									aria-pressed={isSelected}
									data-testid={testId}
									hasFullWidth
								>
									{label}
								</Button>
							))}
						</SettingsRowComponent>
					</SettingsSectionComponent>
				))}
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
