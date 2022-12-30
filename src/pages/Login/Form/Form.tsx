import { Button, Input } from 'components'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { v4 as uuid } from 'uuid'

import { formSchema } from './Form.schema'
import { FormComponent } from './Form.styles'

export const Form = () => {
	const { t } = useTranslation()

	const initialValues: { email: string; password: string } = { email: '', password: '' }

	const onSubmit = () => console.log('submit')

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
				type="email"
				label={`${t('pages.login.label.email')}`}
				name="email"
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
				autoFocus
				hasFullWidth
			/>

			<Input
				id={uuid()}
				type="password"
				label={`${t('pages.login.label.password')}`}
				name="password"
				value={values.password}
				onChange={handleChange}
				onBlur={handleBlur}
				hasFullWidth
			/>

			<Button
				type="submit"
				hasFullWidth
				isLoading={isSubmitting}
				isDisabled={isSubmitting}
			>
				{t('pages.login.action')}
			</Button>
		</FormComponent>
	)
}
