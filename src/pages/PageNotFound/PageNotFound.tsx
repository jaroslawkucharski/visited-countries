import { Button, Paragraph, Spacer } from 'components'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

import { ProfileColumnComponent } from './PageNotFound.styles'

export const PageNotFound = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	const handleSignIn = useCallback(() => navigate(ROUTES.SIGNIN), [navigate])

	return (
		<ProfileColumnComponent>
			<Paragraph size="huge">{t('word.404')}</Paragraph>

			<Paragraph size="big">{t('word.page.not.found')}</Paragraph>

			<Spacer
				type="vertical"
				space="big"
			/>

			<Button
				action={handleSignIn}
				data-testid="button-back"
			>
				{t('word.back')}
			</Button>
		</ProfileColumnComponent>
	)
}
