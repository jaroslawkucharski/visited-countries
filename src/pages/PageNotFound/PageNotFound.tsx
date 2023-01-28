import pageNotFound from 'assets/images/pages/404.jpg'
import { Button, Layout, Paragraph, Spacer } from 'components'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HiArrowLeft } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

export const PageNotFound = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	const handleBack = useCallback(() => navigate(ROUTES.SIGNIN), [navigate])

	return (
		<Layout image={pageNotFound}>
			<Paragraph size="huge">{t('word.404')}</Paragraph>

			<Paragraph size="big">{t('word.page.not.found')}</Paragraph>

			<Spacer
				type="vertical"
				space="big"
			/>

			<Button
				action={handleBack}
				data-testid="button-back"
			>
				<HiArrowLeft />

				{t('word.back')}
			</Button>
		</Layout>
	)
}
