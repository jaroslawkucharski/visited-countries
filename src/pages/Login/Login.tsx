import { Heading, Link, Paragraph, Spacer } from 'components'
import { useTranslation } from 'react-i18next'

import { ROUTES } from 'constants/routes'

import { Form } from './Form'
import { LoginColumnComponent, LoginRowComponent } from './Login.styles'

export const Login = () => {
	const { t } = useTranslation()

	return (
		<LoginColumnComponent>
			<Heading>{t('word.signin')}</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Heading level={2}>{t('login.description')}</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<LoginRowComponent>
				<Form />
			</LoginRowComponent>

			<Spacer type="vertical" />

			<Link to={ROUTES.PASSWORD_RESET}>{t('word.forgot.password')}</Link>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<LoginRowComponent>
				<Paragraph>{t('login.create.account')}</Paragraph>

				<Spacer space="tiny" />

				<Link to={ROUTES.SIGNUP}>{t('word.signup')}</Link>
			</LoginRowComponent>
		</LoginColumnComponent>
	)
}
