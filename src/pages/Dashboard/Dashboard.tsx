import { useAuthContext } from 'context/AuthContext'

export const Dashboard = () => {
	const { logout } = useAuthContext()

	const handleLogout = () => {
		logout()
	}

	return (
		<button
			type="button"
			onClick={handleLogout}
		>
			Log out
		</button>
	)
}
