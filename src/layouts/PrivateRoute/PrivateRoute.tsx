import { Dashboard } from 'pages'
import { Navigate } from 'react-router-dom'
import { ROUTES } from 'routes'

import { getToken } from 'helpers/getToken'

export const PrivateRoute = () => (getToken() ? <Dashboard /> : <Navigate to={ROUTES.SIGNIN} />)
