const Colors = {
	Grey100: '#090909',
	Grey200: '#111111',
	Grey300: '#3C3C3C',
	Grey400: '#797979',
	White100: '#EAEAEA',
	White200: '#EEEEEE',
	White300: '#DDDDDD',
	Red100: '#F97777',
	Red200: '#F75252',
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
		h1: '28px',
		h2: '18px',
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
	mobile: 420,
	tablet: 700,
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
		error: Colors.Red100,
		toastError: Colors.Red200,
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
		error: Colors.Red200,
		toastError: Colors.Red100,
	},
	font,
	spaces,
	breakpoints,
}
