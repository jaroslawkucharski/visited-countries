import { useAuthContext } from 'context/AuthContext'
import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useWindowSize } from 'hooks/useWindowSize'

import { BREAKPOINTS } from 'constants/breakpoints'
import { ROUTES } from 'constants/routes'

interface MobileRouteProps {
	component: ReactElement
}
export const MobileRoute: FC<MobileRouteProps> = ({ component }) => {
	const { userAuth } = useAuthContext()
	const { width } = useWindowSize()

	return userAuth && width <= BREAKPOINTS.MOBILE ? component : <Navigate to={ROUTES.DASHBOARD} />
}
