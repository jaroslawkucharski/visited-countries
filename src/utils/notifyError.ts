import i18next from 'i18next'

import { ERRORS } from '../constants/errors'
import { toastNotify } from './toastNotify'

export const getErrorMessage = (error: unknown) => {
	const { code } = (error || {}) as { code?: string }

	return String(i18next.t((code && ERRORS[code]) || 'toasts.error'))
}

export const notifyError = (error: unknown) => toastNotify(getErrorMessage(error), 'error')
