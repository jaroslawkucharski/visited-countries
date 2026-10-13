export const hideLogo = (pathname: string) => {
	switch (pathname) {
		case '/list':
		case '/profile':
		case '/settings':
		case '/favorites':
			return true
		default:
			return false
	}
}
