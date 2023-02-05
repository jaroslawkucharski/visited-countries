import { Heading, Layout, Paragraph, Spacer } from '@jaroslaw91/novelui'
import login from 'assets/images/pages/login.jpg'
import { Link } from 'components'
import { useTranslation } from 'react-i18next'

import { ROUTES } from 'constants/routes'

import { Form } from './Form'
import { LoginRowComponent } from './Login.styles'

export const Login = () => {
	const { t } = useTranslation()

	return (
		<Layout image={login}>
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
		</Layout>
	)
}
