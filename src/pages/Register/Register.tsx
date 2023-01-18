import { Heading, Link, Paragraph, Spacer } from 'components'
import { useTranslation } from 'react-i18next'

import { ROUTES } from 'constants/routes'

import { Form } from './Form'
import { RegisterColumnComponent, RegisterRowComponent } from './Register.styles'

export const Register = () => {
	const { t } = useTranslation()

	return (
		<RegisterColumnComponent>
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
		</RegisterColumnComponent>
	)
}
