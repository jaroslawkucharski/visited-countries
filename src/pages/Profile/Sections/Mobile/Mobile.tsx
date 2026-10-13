import { Break, Button, PreferencesButtons, Spacer } from 'components'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { showHelpModal } from 'utils'

import { useLogout } from 'hooks/useLogout'

import { ROUTES } from 'constants/routes'

export const Mobile = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	const handleLogout = useLogout()

	const handleOpenSettings = useCallback(() => navigate(ROUTES.SETTINGS), [navigate])

	return (
		<>
			<Spacer
				type="vertical"
				space="big"
			/>

			<Break />

			<Spacer type="vertical" />
			<PreferencesButtons />

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
