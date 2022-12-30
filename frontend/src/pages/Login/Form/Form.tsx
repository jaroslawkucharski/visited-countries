import { Button, Input } from 'components'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { v4 as uuid } from 'uuid'

import { formSchema } from './Form.schema'
import { FormComponent } from './Form.styles'

export const Form = () => {
	const { t } = useTranslation()

	const initialValues = { email: '', password: '' }

	const onSubmit = () => console.log('submit')

	const {
		values,
		handleChange,
		handleBlur,
		errors,
		touched,
		handleSubmit,
		isValid,
		dirty,
		isSubmitting,
	} = useFormik({
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
				label={t('pages.login.label.email')}
				name="email"
				placeholder={t('pages.login.placeholder.email')}
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
				errors={errors}
				touched={touched}
				autoFocus
				hasFullWidth
			/>

			<Input
				id={uuid()}
				type="password"
				label={t('pages.login.label.password')}
				name="password"
				placeholder={t('pages.login.placeholder.password')}
				value={values.password}
				onChange={handleChange}
				onBlur={handleBlur}
				errors={errors}
				touched={touched}
				hasFullWidth
			/>

			<Button
				type="submit"
				hasFullWidth
				isLoading={isSubmitting}
				isDisabled={!isValid || !dirty || isSubmitting}
			>
				{t('pages.login.action')}
			</Button>
		</FormComponent>
	)
}
