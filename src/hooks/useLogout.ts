import { useNavigate } from 'react-router-dom'
import { logout } from 'services/auth'

import { useService } from 'hooks/useService'

import { ROUTES } from 'constants/routes'

export const useLogout = () => {
	const navigate = useNavigate()

	const { request } = useService({
		service: logout,
		successCallback: () => navigate(ROUTES.SIGNIN),
	})

	return () => request()
}
