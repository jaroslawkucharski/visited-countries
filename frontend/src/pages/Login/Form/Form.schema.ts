import { object, string } from 'yup'

export const formSchema = object({
	email: string().email('pages.login.error.email').required(''),
	password: string().required(''),
})
