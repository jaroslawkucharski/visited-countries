import { object, string } from 'yup'

export const formSchema = object({
	email: string(),
	password: string(),
})
