import { loginImage } from 'assets/images/pages'
import { Heading, Layout, Link, Paragraph, Spacer } from 'components'
import { useTranslation } from 'react-i18next'

import { ROUTES } from 'constants/routes'

import { RowComponent } from 'styles/layout'

import { Form } from './Form'

export const Login = () => {
	const { t } = useTranslation()

	return (
		<Layout image={loginImage}>
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

			<RowComponent>
				<Form />
			</RowComponent>

			<Spacer type="vertical" />

			<Link to={ROUTES.PASSWORD_RESET}>{t('word.forgot.password')}</Link>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<RowComponent>
				<Paragraph>{t('login.create.account')}</Paragraph>

				<Spacer space="tiny" />

				<Link to={ROUTES.SIGNUP}>{t('word.signup')}</Link>
			</RowComponent>
		</Layout>
	)
}
