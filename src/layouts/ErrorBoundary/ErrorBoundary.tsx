import { Button, Paragraph, Spacer } from 'components'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HiRefresh } from 'react-icons/hi'
import { HiHandThumbDown } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

import { ProfileColumnComponent } from './ErrorBoundary.styles'

export const ErrorFallback = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	const handleRefresh = useCallback(() => navigate(0), [navigate])

	return (
		<ProfileColumnComponent>
			<Paragraph size="huge">
				<HiHandThumbDown />
			</Paragraph>

			<Spacer type="vertical" />

			<Paragraph size="big">{t('word.error.boundary')}</Paragraph>

			<Spacer
				type="vertical"
				space="big"
			/>

			<Button
				action={handleRefresh}
				data-testid="button-refresh"
			>
				<HiRefresh />

				{t('word.refresh')}
			</Button>
		</ProfileColumnComponent>
	)
}
