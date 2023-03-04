import { Image } from '@jaroslaw91/novelui'
import en from 'assets/images/locales/en.svg'
import pl from 'assets/images/locales/pl.svg'
import i18next from 'i18next'
import { ReactNode, createElement } from 'react'

import { LOCALES } from 'constants/locales'

export const languageDetector = (
	languageEN: string | ReactNode = '',
	languagePL: string | ReactNode = '',
) => (i18next.language === LOCALES.EN ? languageEN : languagePL)

export const getLanguageImage = () => {
	const imageEN = createElement(Image, { src: en, width: 16, alt: LOCALES.EN })
	const imagePL = createElement(Image, { src: pl, width: 16, alt: LOCALES.PL })

	return languageDetector(imageEN, imagePL)
}
