import { object, string } from 'yup'

export const formSchema = object({
	email: string().email('errors.email').required('errors.empty.field'),
	password: string().required('errors.empty.field').min(6, 'errors.min.characters.6'),
})
