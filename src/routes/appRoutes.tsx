import { Loader } from 'components'
import { Suspense, createElement, lazy } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { ROUTES } from 'constants/routes'

import { MobileRoute } from './MobileRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const Login = lazy(async () => ({
	default: (await import('pages')).Login,
}))

const Register = lazy(async () => ({
	default: (await import('pages')).Register,
}))

const Dashboard = lazy(async () => ({
	default: (await import('pages')).Dashboard,
}))

const DashboardList = lazy(async () => ({
	default: (await import('pages')).DashboardList,
}))

const Profile = lazy(async () => ({
	default: (await import('pages')).Profile,
}))

const routes = [
	{
		path: ROUTES.SIGNIN,
		route: PublicRoute,
		component: <Login />,
	},
	{
		path: ROUTES.SIGNUP,
		route: PublicRoute,
		component: <Register />,
	},
	{
		path: ROUTES.DASHBOARD,
		route: PrivateRoute,
		component: <Dashboard />,
	},
	{
		path: ROUTES.DASHBOARD_LIST,
		route: MobileRoute,
		component: <DashboardList />,
	},
	{
		path: ROUTES.PROFILE,
		route: PrivateRoute,
		component: <Profile />,
	},
]

export const appRoutes = routes.map(({ path, route, component }) => (
	<Route
		key={uuid()}
		path={path}
		element={createElement(route, {
			component: <Suspense fallback={<Loader type="website" />}>{component}</Suspense>,
		})}
	/>
))
