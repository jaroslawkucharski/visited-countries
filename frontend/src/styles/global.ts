import * as styled from 'styled-components'

export const GlobalStyles = styled.createGlobalStyle`
	:root {
		font-family: 'Poppins', sans-serif;
		font-weight: ${({ theme }) => theme.weights.regular};
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
	}

	html {
		line-height: ${({ theme }) => theme.lineHeight.default};
		-webkit-text-size-adjust: 100%;
		-webkit-font-smoothing: antialiased;
	}

	main {
		display: block;
	}

	a {
		background-color: transparent;
	}

	img {
		border-style: none;
	}

	html,
	body {
		height: 100%;
		font-size: ${({ theme }) => theme.fontSizes.default}
		height: 100vh;
		color: ${({ theme }) => theme.colors.secondary};
		background-color: ${({ theme }) => theme.colors.main};
	}
	body {
		line-height: ${({ theme }) => theme.lineHeight.default};
		-webkit-font-smoothing: antialiased;
	}
	img,
	picture,
	video,
	canvas,
	svg {
		display: block;
		max-width: 100%;
	}
	input,
	button,
	textarea,
	select {
		font: inherit;
	}
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
	}
`
