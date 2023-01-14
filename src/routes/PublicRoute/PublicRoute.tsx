import { useAuthContext } from 'context/AuthContext'
import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { ROUTES } from 'constants/routes'

interface PublicRouteProps {
	component: ReactElement
}
export const PublicRoute: FC<PublicRouteProps> = ({ component }) => {
	const { userAuth } = useAuthContext()

	return !userAuth ? component : <Navigate to={ROUTES.DASHBOARD} />
}
