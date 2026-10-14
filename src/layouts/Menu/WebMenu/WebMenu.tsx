import { Button, PreferencesButtons } from 'components'
import { ErrorBoundary } from 'layouts'
import { DashboardList } from 'pages'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi2'

import { WebMenuComponent, WebMenuItemComponent } from './WebMenu.style'

export const WebMenu = () => {
	const { t } = useTranslation()

	const [isOpen, setOpen] = useState<boolean>(false)

	const handleOpenList = useCallback(() => setOpen(!isOpen), [isOpen])

	return (
		<WebMenuComponent>
			<Button
				variant="icon"
				onClick={handleOpenList}
				aria-label={String(t(isOpen ? 'word.list.hide' : 'word.list.show'))}
				aria-expanded={isOpen}
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

			<PreferencesButtons direction="column" />
		</WebMenuComponent>
	)
}
