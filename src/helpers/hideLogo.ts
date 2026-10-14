export const hideLogo = (pathname: string) => {
	switch (pathname) {
		case '/list':
		case '/profile':
		case '/favorites':
			return true
		default:
			return false
	}
}
