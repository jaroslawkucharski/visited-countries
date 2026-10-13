import { registerImage } from 'assets/images/pages'
import { Heading, Layout, Link, Paragraph, Spacer } from 'components'
import { useTranslation } from 'react-i18next'

import { ROUTES } from 'constants/routes'

import { RowComponent } from 'styles/layout'

import { Form } from './Form'

export const Register = () => {
	const { t } = useTranslation()

	return (
		<Layout image={registerImage}>
			<Heading>{t('word.signup')}</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Heading level={2}>{t('register.description')}</Heading>

			<Spacer type="vertical" />

			<RowComponent>
				<Form />
			</RowComponent>

			<Spacer type="vertical" />

			<RowComponent>
				<Paragraph>{t('register.already.account')}</Paragraph>

				<Spacer space="tiny" />

				<Link to={ROUTES.SIGNIN}>{t('word.signin')}</Link>
			</RowComponent>
		</Layout>
	)
}
