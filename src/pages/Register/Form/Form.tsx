import { Button, Input, Spacer } from 'components'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { v4 as uuid } from 'uuid'

import { formSchema } from './Form.schema'
import { FormComponent } from './Form.styles'

interface FormValues {
	username: string
	email: string
	password: string
}

export const Form = () => {
	const { t } = useTranslation()

	const initialValues: { username: string; email: string; password: string } = {
		username: '',
		email: '',
		password: '',
	}

	const onSubmit = async (values: FormValues) => console.log({ ...values })

	const { values, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
		initialValues,
		validationSchema: formSchema,
		onSubmit,
	})

	return (
		<FormComponent
			onSubmit={handleSubmit}
			noValidate
		>
			<Input
				id={uuid()}
				type="text"
				label={`${t('pages.register.label.username')}`}
				name="username"
				value={values.username}
				onChange={handleChange}
				onBlur={handleBlur}
				autoFocus
				hasFullWidth
			/>

			<Spacer type="vertical" />

			<Input
				id={uuid()}
				type="email"
				label={`${t('pages.register.label.email')}`}
				name="email"
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
				autoFocus
				hasFullWidth
			/>

			<Spacer type="vertical" />

			<Input
				id={uuid()}
				type="password"
				label={`${t('pages.register.label.password')}`}
				name="password"
				value={values.password}
				onChange={handleChange}
				onBlur={handleBlur}
				hasFullWidth
			/>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Spacer type="vertical" />

			<Button
				type="submit"
				hasFullWidth
				isLoading={isSubmitting}
				isDisabled={isSubmitting}
			>
				{t('pages.register.action')}
			</Button>
		</FormComponent>
	)
}
