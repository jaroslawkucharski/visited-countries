import i18next from 'i18next'
import { object, string } from 'yup'

export const formSchema = object({
	email: string()
		.email(`${i18next.t('pages.login.fields.labels.email')}`)
		.required(`${i18next.t('pages.login.fields.labels.email')}`),
	password: string().required(`${i18next.t('pages.login.fields.labels.email')}`),
})
