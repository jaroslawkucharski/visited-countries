import { Heading, Layout, Paragraph, Spacer } from '@jaroslaw91/novelui'
import register from 'assets/images/pages/register.jpg'
import { Link } from 'components'
import { useTranslation } from 'react-i18next'

import { ROUTES } from 'constants/routes'

import { Form } from './Form'
import { RegisterRowComponent } from './Register.styles'

export const Register = () => {
	const { t } = useTranslation()

	return (
		<Layout image={register}>
			<Heading>{t('word.signup')}</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Heading level={2}>{t('register.description')}</Heading>

			<Spacer type="vertical" />

			<RegisterRowComponent>
				<Form />
			</RegisterRowComponent>

			<Spacer type="vertical" />

			<RegisterRowComponent>
				<Paragraph>{t('register.already.account')}</Paragraph>

				<Spacer space="tiny" />

				<Link to={ROUTES.SIGNIN}>{t('word.signin')}</Link>
			</RegisterRowComponent>
		</Layout>
	)
}
