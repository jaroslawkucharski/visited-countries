import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const toastNotify = (text: string, type: 'success' | 'error' | 'warning' | 'info') =>
	toast[type](text, {
		position: 'bottom-left',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		closeButton: false,
		draggable: true,
		progress: undefined,
	})
