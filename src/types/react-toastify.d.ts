// "react-toastify/unstyled" is the same API without auto-injected CSS (the app ships its own toast styles).
// TypeScript's "node" module resolution can't read package "exports", so the subpath is declared here.
declare module 'react-toastify/unstyled' {
	export * from 'react-toastify'
}
