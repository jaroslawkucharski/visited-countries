import { Button, Spacer } from 'components'
import { Input } from 'components'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { singIn } from 'services/auth'
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

	const initialValues: { email: string; password: string } = { email: '', password: '' }

	const { request } = useService({
		service: singIn,
		successToast: t('login.toast.success'),
		successCallback: () => navigate(ROUTES.DASHBOARD),
	})

	const onSubmit = ({ email, password }: FormValues) => request(email, password)

	const { values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched } =
		useFormik({
			initialValues,
			validationSchema: formSchema,
			onSubmit,
		})

	const isError = (errors.email && touched.email) as boolean

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

			<Input
				id={uuid()}
				type="password"
				label={`${t('word.password')}`}
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

			<Button
				type="submit"
				hasFullWidth
				isLoading={isSubmitting}
				isDisabled={isSubmitting || isError}
			>
				{t('word.login')}
			</Button>
		</FormComponent>
	)
}
