import { ReactNode } from 'react'
import { Icons, toast } from 'react-toastify/unstyled'

import { BREAKPOINTS } from '../constants/breakpoints'

type ToastType = 'success' | 'error' | 'warning' | 'info'

// react-toastify v11 no longer wraps the icon and message in a body element,
// so the markup expected by ToastStyles is rendered here to keep the original look.
const ToastBody = ({ text, type }: { text: ReactNode; type: ToastType }) => (
	<div className="Toastify__toast-body">
		<div className="Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter">
			{Icons[type]({ theme: 'light', type })}
		</div>

		<div>{text}</div>
	</div>
)

export const toastNotify = (text: ReactNode, type: ToastType) =>
	toast[type](
		<ToastBody
			text={text}
			type={type}
		/>,
		{
			position: window.innerWidth <= BREAKPOINTS.MOBILE ? 'top-center' : 'bottom-left',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			closeButton: false,
			draggable: true,
			progress: undefined,
			icon: false,
		},
	)
