import i18next from 'i18next'
import en from 'locales/en-US.json'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
	load: 'languageOnly',
	resources: { en: { translation: en } },
})

export default i18next
