import { ReactNode } from 'react'
import { toast } from 'react-toastify'

import { BREAKPOINTS } from '../constants/breakpoints'

export const toastNotify = (text: ReactNode, type: 'success' | 'error' | 'warning' | 'info') =>
	toast[type](text, {
		position: window.innerWidth <= BREAKPOINTS.MOBILE ? 'top-center' : 'bottom-left',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		closeButton: false,
		draggable: true,
		progress: undefined,
	})
