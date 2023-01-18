import { Button, Input, Spacer } from 'components'
import { useAuthContext } from 'context/AuthContext'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { v4 as uuid } from 'uuid'

import { formSchema } from './Form.schema'
import { FormComponent } from './Form.styles'

interface FormValues {
	email: string
}

export const Form = () => {
	const { t } = useTranslation()
	const { resetPassword } = useAuthContext()

	const initialValues: { email: string } = { email: '' }

	const onSubmit = async ({ email }: FormValues) => {
		await resetPassword(email)
	}

	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		isSubmitting,
		isValid,
		dirty,
		errors,
		touched,
	} = useFormik({
		initialValues,
		validationSchema: formSchema,
		onSubmit,
	})

	return (
		<FormComponent
			onSubmit={handleSubmit}
			noValidate
			data-testid="form"
		>
			<Input
				id={uuid()}
				type="email"
				label={`${t('word.email')}`}
				name="email"
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
				autoFocus
				hasFullWidth
				errors={errors}
				touched={touched}
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
				isDisabled={isSubmitting || !isValid || !dirty}
			>
				{t('word.password.reset')}
			</Button>
		</FormComponent>
	)
}
