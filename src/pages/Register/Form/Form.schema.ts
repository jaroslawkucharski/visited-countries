import { object, ref, string } from 'yup'

export const formSchema = object({
	displayName: string().required('errors.empty.field').trim('errors.empty.field'),
	email: string().email('errors.email').required('errors.empty.field'),
	password: string().required('errors.empty.field').min(6, 'errors.min.characters.6'),
	confirmPassword: string()
		.oneOf([ref('password'), null], 'errors.confirm.password')
		.required('errors.empty.field')
		.min(6, 'errors.min.characters.6'),
})
