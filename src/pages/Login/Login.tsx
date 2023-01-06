import { Heading, Link, Paragraph, Spacer } from 'components'
import { TopBar } from 'layouts'
import { useTranslation } from 'react-i18next'

import { Form } from './Form'
import { LoginColumnComponent, LoginRowComponent } from './Login.styles'

export const Login = () => {
	const { t } = useTranslation()

	return (
		<>
			<TopBar />

			<LoginColumnComponent>
				<Heading>{t('pages.login.heading')}</Heading>

				<Spacer
					type="vertical"
					space="small"
				/>

				<Heading level={2}>{t('pages.login.description')}</Heading>

				<Spacer
					type="vertical"
					space="small"
				/>

				<LoginRowComponent>
					<Form />
				</LoginRowComponent>

				<Spacer type="vertical" />

				<Link to="/signup">{t('pages.login.link.forgot.password')}</Link>

				<Spacer
					type="vertical"
					space="tiny"
				/>

				<LoginRowComponent>
					<Paragraph>{t('pages.login.paragraph.signup')}</Paragraph>

					<Spacer space="tiny" />

					<Link to="/signup">{t('pages.login.link.signup')}</Link>
				</LoginRowComponent>
			</LoginColumnComponent>
		</>
	)
}
