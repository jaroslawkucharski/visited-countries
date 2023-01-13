import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from 'locales/en-US.json'
import pl from 'locales/pl-PL.json'
import { initReactI18next } from 'react-i18next'

const resources = {
	'en-US': {
		translation: en,
	},
	'pl-PL': {
		translation: pl,
	},
}

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en-US',
		interpolation: {
			escapeValue: false,
		},
		detection: { lookupLocalStorage: 'language' },
	})

export default i18next
