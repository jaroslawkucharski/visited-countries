import { BREAKPOINTS } from 'constants/breakpoints'

export const colors = {
	dark100: '#090909',
	dark80: '#3A3A3A',
	dark50: '#848484',
	dark20: '#CECECE',
	light100: '#DDDDDD',
	light80: '#E4E4E4',
	light50: '#EEEEEE',
	light20: '#F8F8F8',
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
	// Green100: '#D7E66D',
	Green200: '#D6E560',
	Green300: '#8EE296',
	Green400: '#83DF8C',
	Blue100: '#83CDE8',
	Blue200: '#77C8E6',
	Green100: 'rgba(71, 154, 17, 1)',
	Green80: 'rgba(71, 154, 17, 0.8)',
	Green50: 'rgba(71, 154, 17, 0.5)',
	Green20: 'rgba(71, 154, 17, 0.2)',
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
		notFound: '128px',
		s10: '10px',
		s12: '12px',
		s14: '14px',
		s16: '16px',
		s18: '18px',
		s28: '28px',
		s36: '36px',
		s64: '64px',
		s128: '128px',
	},

	lineHeight: {
		default: '24px',
		h1: '44px',
		h2: '28px',
		l24: '24px',
		l44: '44px',
		l28: '28px',
	},

	letterSpacing: {
		default: 'normal',
		h1: '0.1em',
		h2: '0.02em',
		ls1: 'normal',
		ls01: '0.1em',
		ls002: '0.02em',
	},
}

const breakpoints = {
	mobile: BREAKPOINTS.MOBILE,
	tablet: BREAKPOINTS.TABLET,
}

export const lightTheme = {
	colors: {
		main: colors.White100,
		secondary: colors.Grey100,
		color1: colors.Grey300,
		color2: colors.Grey200,
		color3: colors.White200,
		color4: colors.Grey300,
		color5: colors.Grey400,
		weak: colors.Orange100,
		good: colors.Green100,
		error: colors.Red100,
		warning: colors.Yellow100,
		success: colors.Green300,
		info: colors.Blue100,
		toastError: colors.Red200,
		toastWarning: colors.Yellow200,
		toastSuccess: colors.Green400,
		toastInfo: colors.Blue200,
		main100: colors.light100,
		main80: colors.light80,
		main50: colors.light50,
		main20: colors.light20,
		secondary100: colors.dark100,
		secondary80: colors.dark80,
		secondary50: colors.dark50,
		secondary20: colors.dark20,
		Green100: colors.Green100,
		Green80: colors.Green80,
		Green50: colors.Green50,
		Green20: colors.Green20,
	},
	font,
	spaces,
	breakpoints,
}

export const darkTheme = {
	colors: {
		main: colors.Grey100,
		secondary: colors.White300,
		color1: colors.White100,
		color2: colors.White200,
		color3: colors.Grey200,
		color4: colors.Grey300,
		color5: colors.Grey400,
		weak: colors.Orange200,
		good: colors.Green200,
		error: colors.Red200,
		warning: colors.Yellow200,
		success: colors.Green400,
		info: colors.Blue200,
		toastError: colors.Red100,
		toastWarning: colors.Yellow100,
		toastSuccess: colors.Green300,
		toastInfo: colors.Blue100,
		main100: colors.dark100,
		main80: colors.dark80,
		main50: colors.dark50,
		main20: colors.dark20,
		secondary100: colors.light100,
		secondary80: colors.light80,
		secondary50: colors.light50,
		secondary20: colors.light20,
		Green100: colors.Green100,
		Green80: colors.Green80,
		Green50: colors.Green50,
		Green20: colors.Green20,
	},
	font,
	spaces,
	breakpoints,
}
