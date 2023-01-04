import { Heading, Spacer } from 'components'
import { TopBar } from 'layouts'
import { useTranslation } from 'react-i18next'

import { Form } from './Form'
import { RegisterColumnComponent, RegisterRowComponent } from './Register.styles'

export const Register = () => {
	const { t } = useTranslation()

	return (
		<>
			<TopBar />

			<RegisterColumnComponent>
				<Heading>{t('pages.register.heading')}</Heading>

				<Spacer
					type="vertical"
					space="small"
				/>

				<Heading level={2}>{t('pages.register.description')}</Heading>

				<Spacer type="vertical" />

				<RegisterRowComponent>
					<Form />
				</RegisterRowComponent>
			</RegisterColumnComponent>
		</>
	)
}
