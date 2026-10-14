import { UserCredential } from 'firebase/auth'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { getErrorMessage, toastNotify } from 'utils'

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

	const initialState = useMemo<State>(
		() => ({
			isLoading: false,
			isLoaded: false,
		}),
		[],
	)

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
			} catch (error) {
				toastNotify(errorToast || getErrorMessage(error), 'error')

				errorCallback?.()
			} finally {
				setState(initialState)
			}
		},
		[service, errorCallback, successCallback, errorToast, successToast, initialState],
	)

	useEffect(() => {
		if (autoFetch) {
			request(...serviceArgs)
		}
	}, [autoFetch, request, serviceArgs])

	return { ...state, request }
}
