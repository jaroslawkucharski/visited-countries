import { Button, Spacer } from 'components'
import { useTranslation } from 'react-i18next'
import { showHelpModal } from 'utils'

import { useLogout } from 'hooks/useLogout'

export const Mobile = () => {
	const { t } = useTranslation()

	const handleLogout = useLogout()

	return (
		<>
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
