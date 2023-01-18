import { object, string } from 'yup'

export const formSchema = object({
	email: string().email('errors.email').required('errors.empty.field'),
})
