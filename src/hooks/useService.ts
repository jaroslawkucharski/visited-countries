/* eslint-disable @typescript-eslint/no-explicit-any */
import { toastNotify } from '@jaroslaw91/novelui'
import { UserCredential } from 'firebase/auth'
import i18next from 'i18next'
import { ReactNode, useCallback, useEffect, useState } from 'react'

import { ERRORS } from 'constants/errors'

interface ServiceProps {
	autoFetch?: boolean
	service: (...args: string[]) => Promise<UserCredential> | Promise<void>
	serviceArgs?: string[]
	successToast?: ReactNode
	successCallback?: () => void
	errorToast?: ReactNode
	errorCallback?: () => void
}

export const useService = ({
	autoFetch = false,
	service,
	serviceArgs = [],
	successToast,
	successCallback,
	errorToast,
	errorCallback,
}: ServiceProps) => {
	interface State {
		isLoading: boolean
		isLoaded: boolean
	}

	const initialState: State = {
		isLoading: false,
		isLoaded: false,
	}

	const [state, setState] = useState(initialState)

	const request = useCallback(
		async (...requestArgs: string[]) => {
			setState(prev => ({ ...prev, isLoading: true }))

			try {
				await service(...[...requestArgs])

				setState(prev => ({ ...prev, isLoaded: true }))

				if (successToast) {
					toastNotify(successToast, 'success')
				}

				successCallback?.()
			} catch ({ code }: any) {
				toastNotify(errorToast || i18next.t(ERRORS[code as string] || 'toasts.error'), 'error')

				errorCallback?.()
			}
		},
		[service, errorCallback, successCallback, errorToast, successToast],
	)

	useEffect(() => {
		if (autoFetch) {
			request(...serviceArgs)
		}
	}, [autoFetch, request, serviceArgs])

	return { ...state, request }
}
