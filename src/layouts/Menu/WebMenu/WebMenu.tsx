import { Button, Spacer } from '@jaroslaw91/novelui'
import { useThemeColorContext } from 'context/ThemeContext'
import { ErrorBoundary } from 'layouts'
import { DashboardList } from 'pages'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiMoon, HiSun } from 'react-icons/hi2'

import { getLanguageImage } from 'helpers/languageDetector'

import { LOCALES } from 'constants/locales'

import { WebMenuComponent, WebMenuItemComponent } from './WebMenu.style'

export const WebMenu = () => {
	const { i18n } = useTranslation()
	const { theme, toggleTheme } = useThemeColorContext()

	const [isOpen, setOpen] = useState<boolean>(false)

	const handleOpenList = useCallback(() => setOpen(!isOpen), [isOpen])

	const handleThemeColorChange = useCallback(() => toggleTheme(), [toggleTheme])

	const handleLanguageChangeToPL = useCallback(
		() =>
			i18n.language === LOCALES.EN
				? i18n.changeLanguage(LOCALES.PL)
				: i18n.changeLanguage(LOCALES.EN),
		[i18n],
	)

	return (
		<WebMenuComponent>
			<Button
				variant="secondary"
				action={handleOpenList}
				hasOnlyIcon
			>
				{isOpen ? <HiChevronDoubleLeft /> : <HiChevronDoubleRight />}
			</Button>

			{isOpen && (
				<WebMenuItemComponent>
					<ErrorBoundary>
						<DashboardList />
					</ErrorBoundary>
				</WebMenuItemComponent>
			)}

			<div>
				<Button
					variant="secondary"
					action={handleThemeColorChange}
					hasOnlyIcon
				>
					{theme === 'dark' ? <HiSun /> : <HiMoon />}
				</Button>

				<Spacer
					type="vertical"
					space="tiny"
				/>

				<Button
					variant="secondary"
					action={handleLanguageChangeToPL}
					hasOnlyIcon
				>
					{getLanguageImage()}
				</Button>
			</div>
		</WebMenuComponent>
	)
}
