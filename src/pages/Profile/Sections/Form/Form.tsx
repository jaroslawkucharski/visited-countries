import { Button, Input, Spacer } from 'components'
import { auth } from 'config/firebase'
import { useFormik } from 'formik'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { updateUserEmail, updateUserPassword, updateUserProfile } from 'services/user'
import { v4 as uuid } from 'uuid'

import { formSchema } from './Form.schema'
import { FormComponent } from './Form.styles'

interface FormValues {
	name: string
	email: string
	password: string
}

export const Form = () => {
	const { t } = useTranslation()

	const navigate = useNavigate()

	const initialValues: {
		name: string
		email: string
		password: string
	} = {
		name: auth?.currentUser?.displayName || '',
		email: auth?.currentUser?.email || '',
		password: '',
	}

	const handleRefresh = useCallback(() => navigate(0), [navigate])

	const onSubmit = async ({ name, email, password }: FormValues) => {
		name !== auth?.currentUser?.displayName && (await updateUserProfile({ displayName: name }))
		email !== auth?.currentUser?.email && (await updateUserEmail(email))
		password && (await updateUserPassword(password))

		handleRefresh()
	}

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
				type="text"
				label={`${t('word.name')}`}
				name="name"
				value={values.name}
				onChange={handleChange}
				onBlur={handleBlur}
				hasFullWidth
				errors={errors}
				touched={touched}
			/>

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
				label={`${t('word.new.password')}`}
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
				{t('word.edit.data')}
			</Button>
		</FormComponent>
	)
}
