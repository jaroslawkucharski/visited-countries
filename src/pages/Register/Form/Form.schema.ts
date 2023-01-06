import { object, ref, string } from 'yup'

export const formSchema = object({
	email: string().email('pages.register.error.email').required('pages.register.error.field'),
	password: string().required('pages.register.error.field'),
	confirmPassword: string()
		.oneOf([ref('password'), null], 'pages.register.error.confirm.password')
		.required('pages.register.error.field'),
})
