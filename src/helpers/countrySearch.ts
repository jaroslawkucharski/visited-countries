import { CountriesListType } from 'context/CountriesListContext'

import { LOCALES } from 'constants/locales'

export const normalizeText = (text = '') =>
	text
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.replace(/ł/g, 'l')
		.replace(/Ł/g, 'L')
		.toLowerCase()
		.trim()

export const matchesCountry = (
	country: CountriesListType | undefined,
	query: string,
	language: string = LOCALES.PL,
) => {
	const normalizedQuery = normalizeText(query)

	if (!normalizedQuery) return true

	const name = language === LOCALES.EN ? country?.nameEN : country?.namePL

	return normalizeText(name).includes(normalizedQuery)
}
