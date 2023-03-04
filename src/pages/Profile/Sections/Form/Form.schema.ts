import { object, string } from 'yup'

export const formSchema = object({
	name: string(),
	email: string().email('errors.email'),
	password: string().min(6, 'errors.min.characters.6'),
})
