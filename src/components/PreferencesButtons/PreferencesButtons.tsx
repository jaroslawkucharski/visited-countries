import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMoon, HiSun } from 'react-icons/hi2'

import { getLanguageImage } from 'helpers/languageDetector'

import { usePreferences } from 'hooks/usePreferences'

import { Button } from '../Button'
import { PreferencesButtonsComponent } from './PreferencesButtons.styles'

interface PreferencesButtonsProps {
	direction?: 'row' | 'column'
}

export const PreferencesButtons: FC<PreferencesButtonsProps> = ({ direction = 'row' }) => {
	const { t } = useTranslation()
	const { isDark, toggleTheme, toggleLanguage } = usePreferences()

	return (
		<PreferencesButtonsComponent direction={direction}>
			<Button
				variant="icon"
				onClick={toggleTheme}
				aria-label={String(t('word.theme.toggle'))}
			>
				{isDark ? <HiSun /> : <HiMoon />}
			</Button>

			<Button
				variant="icon"
				onClick={toggleLanguage}
				aria-label={String(t('word.language.toggle'))}
			>
				{getLanguageImage()}
			</Button>
		</PreferencesButtonsComponent>
	)
}

PreferencesButtons.displayName = 'PreferencesButtons'
