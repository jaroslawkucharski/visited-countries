import { Button, Layout, Paragraph, Spacer } from 'components'
import { FC, ReactNode, useCallback } from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import { useTranslation } from 'react-i18next'
import { HiRefresh } from 'react-icons/hi'
import { HiHandThumbDown } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

export const ErrorFallback = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	const handleRefresh = useCallback(() => navigate(0), [navigate])

	return (
		<Layout>
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
				onClick={handleRefresh}
				data-testid="button-refresh"
			>
				<HiRefresh />

				{t('word.refresh')}
			</Button>
		</Layout>
	)
}

interface ErrorBoundaryProps {
	children: ReactNode
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => (
	<ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>
)
