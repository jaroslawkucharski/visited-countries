import { Button, Input, Spacer } from 'components'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { singUp } from 'services/auth'
import { v4 as uuid } from 'uuid'

import { useService } from 'hooks/useService'

import { ROUTES } from 'constants/routes'

import { formSchema } from './Form.schema'
import { FormComponent } from './Form.styles'

interface FormValues {
	email: string
	password: string
}

export const Form = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	const initialValues: {
		email: string
		password: string
	} = {
		email: '',
		password: '',
	}

	const { request: register } = useService({
		service: singUp,
		successToast: t('register.toast.success'),
		successCallback: () => navigate(ROUTES.DASHBOARD),
	})

	const onSubmit = async ({ email, password }: FormValues) => register(email, password)

	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		isSubmitting,
		errors,
		touched,
		isValid,
		dirty,
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
				hasFullWidth
				errors={errors}
				touched={touched}
			/>

			<Input
				id={uuid()}
				type="password"
				label={`${t('word.password')}`}
				name="password"
				value={values.password}
				onChange={handleChange}
				onBlur={handleBlur}
				hasFullWidth
				errors={errors}
				touched={touched}
				hasPasswordMeter
			/>

			<Spacer
				space="small"
				type="vertical"
			/>

			<Button
				type="submit"
				hasFullWidth
				isLoading={isSubmitting}
				isDisabled={isSubmitting || !isValid || !dirty}
			>
				{t('word.register')}
			</Button>
		</FormComponent>
	)
}
