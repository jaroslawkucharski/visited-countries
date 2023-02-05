import { Heading, Layout, Spacer } from '@jaroslaw91/novelui'
import passwordReset from 'assets/images/pages/password-reset.jpg'
import { Link } from 'components'
import { useTranslation } from 'react-i18next'

import { ROUTES } from 'constants/routes'

import { Form } from './Form'
import { LoginRowComponent } from './PasswordReset.styles'

export const PasswordReset = () => {
	const { t } = useTranslation()

	return (
		<Layout image={passwordReset}>
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
		</Layout>
	)
}
