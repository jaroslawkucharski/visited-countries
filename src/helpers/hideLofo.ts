export const hideLogo = (pathname: string) => {
	switch (pathname) {
		case '/list':
		case '/profile':
			return true
		default:
			return false
	}
}
