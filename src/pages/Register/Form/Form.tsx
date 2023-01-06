import { Button, Input, Spacer } from 'components'
import { useAuthContext } from 'context/AuthContext'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { v4 as uuid } from 'uuid'

import { formSchema } from './Form.schema'
import { FormComponent } from './Form.styles'

interface FormValues {
	email: string
	password: string
	confirmPassword: string
}

export const Form = () => {
	const { t } = useTranslation()
	const { singUp } = useAuthContext()

	const initialValues: {
		email: string
		password: string
		confirmPassword: string
	} = {
		email: '',
		password: '',
		confirmPassword: '',
	}

	const onSubmit = async ({ email, password }: FormValues) => singUp(email, password)

	const { values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched, isValid } =
		useFormik({
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
				type="email"
				label={`${t('pages.register.label.email')}`}
				name="email"
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
				autoFocus
				hasFullWidth
				errors={errors}
				touched={touched}
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
				errors={errors}
				touched={touched}
			/>

			<Spacer type="vertical" />

			<Input
				id={uuid()}
				type="password"
				label={`${t('pages.register.label.confirm.password')}`}
				name="confirmPassword"
				value={values.confirmPassword}
				onChange={handleChange}
				onBlur={handleBlur}
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
				isDisabled={isSubmitting || !isValid}
			>
				{t('pages.register.action')}
			</Button>
		</FormComponent>
	)
}
