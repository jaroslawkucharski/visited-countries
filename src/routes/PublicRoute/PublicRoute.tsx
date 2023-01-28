import { useAuthContext } from 'context/AuthContext'
import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useWindowSize } from 'hooks/useWindowSize'

import { BREAKPOINTS } from 'constants/breakpoints'
import { ROUTES } from 'constants/routes'

interface PublicRouteProps {
	component: ReactElement
	isOnlyForMobile?: boolean
}
export const PublicRoute: FC<PublicRouteProps> = ({ component, isOnlyForMobile = false }) => {
	const { userAuth } = useAuthContext()
	const { isMobile } = useWindowSize()

	const perrmission = isOnlyForMobile ? !userAuth && isMobile : !userAuth

	return perrmission ? component : <Navigate to={ROUTES.DASHBOARD} />
}
