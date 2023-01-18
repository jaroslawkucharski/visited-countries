import { Heading, Link, Spacer } from 'components'
import { useTranslation } from 'react-i18next'

import { ROUTES } from 'constants/routes'

import { Form } from './Form'
import { LoginColumnComponent, LoginRowComponent } from './PasswordReset.styles'

export const PasswordReset = () => {
	const { t } = useTranslation()

	return (
		<LoginColumnComponent>
			<Heading>{t('word.password.reset')}</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Heading level={2}>{t('password.reset.description')}</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<LoginRowComponent>
				<Form />
			</LoginRowComponent>

			<Spacer type="vertical" />

			<Link to={ROUTES.SIGNIN}>{t('word.signin')}</Link>
		</LoginColumnComponent>
	)
}
