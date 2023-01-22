import { BREAKPOINTS } from 'constants/breakpoints'

const Colors = {
	Grey100: '#090909',
	Grey200: '#111111',
	Grey300: '#3C3C3C',
	Grey400: '#797979',
	White100: '#EAEAEA',
	White200: '#EEEEEE',
	White300: '#DDDDDD',
	Red100: '#F97777',
	Red200: '#F86565',
	Orange100: '#EFA360',
	Orange200: '#F18F5D',
	Yellow100: '#DECC56',
	Yellow200: '#E4CF49',
	Green100: '#D7E66D',
	Green200: '#D6E560',
	Green300: '#8EE296',
	Green400: '#83DF8C',
	Blue100: '#83CDE8',
	Blue200: '#77C8E6',
}

const spaces = {
	mini: '4px',
	tiny: '8px',
	small: '12px',
	medium: '20px',
	big: '40px',
	large: '60px',
	huge: '80px',
}

const font = {
	weights: {
		regular: 400,
		medium: 500,
		bold: 600,
	},

	sizes: {
		error: '12px',
		default: '16px',
		info: '18px',
		h1: '28px',
		h2: '18px',
		icon: '64px',
	},

	lineHeight: {
		default: '24px',
		h1: '44px',
		h2: '28px',
	},

	letterSpacing: {
		default: 'normal',
		h1: '0.1em',
		h2: '0.02em',
	},
}

const breakpoints = {
	mobile: BREAKPOINTS.MOBILE,
	tablet: BREAKPOINTS.TABLET,
}

export const lightTheme = {
	colors: {
		main: Colors.White100,
		secondary: Colors.Grey100,
		color1: Colors.Grey300,
		color2: Colors.Grey200,
		color3: Colors.White200,
		color4: Colors.Grey300,
		color5: Colors.Grey400,
		weak: Colors.Orange100,
		good: Colors.Green100,
		error: Colors.Red100,
		warning: Colors.Yellow100,
		success: Colors.Green300,
		info: Colors.Blue100,
		toastError: Colors.Red200,
		toastWarning: Colors.Yellow200,
		toastSuccess: Colors.Green400,
		toastInfo: Colors.Blue200,
	},
	font,
	spaces,
	breakpoints,
}

export const darkTheme = {
	colors: {
		main: Colors.Grey100,
		secondary: Colors.White300,
		color1: Colors.White100,
		color2: Colors.White200,
		color3: Colors.Grey200,
		color4: Colors.Grey300,
		color5: Colors.Grey400,
		weak: Colors.Orange200,
		good: Colors.Green200,
		error: Colors.Red200,
		warning: Colors.Yellow200,
		success: Colors.Green400,
		info: Colors.Blue200,
		toastError: Colors.Red100,
		toastWarning: Colors.Yellow100,
		toastSuccess: Colors.Green300,
		toastInfo: Colors.Blue100,
	},
	font,
	spaces,
	breakpoints,
}
