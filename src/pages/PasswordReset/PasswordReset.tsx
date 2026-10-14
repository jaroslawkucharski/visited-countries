import { passwordResetImage } from 'assets/images/pages'
import { Heading, Layout, Link, Spacer } from 'components'
import { useTranslation } from 'react-i18next'

import { ROUTES } from 'constants/routes'

import { RowComponent } from 'styles/layout'

import { Form } from './Form'

export const PasswordReset = () => {
	const { t } = useTranslation()

	return (
		<Layout image={passwordResetImage}>
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

			<RowComponent>
				<Form />
			</RowComponent>

			<Spacer type="vertical" />

			<Link to={ROUTES.SIGNIN}>{t('word.signin')}</Link>
		</Layout>
	)
}
