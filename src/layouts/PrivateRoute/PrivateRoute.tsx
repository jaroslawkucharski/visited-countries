import { useAuthContext } from 'context/AuthContext'
import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from 'routes'

interface PrivateRouteProps {
	component: ReactElement
}
export const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
	const { userAuth } = useAuthContext()

	return userAuth ? component : <Navigate to={ROUTES.SIGNIN} />
}
