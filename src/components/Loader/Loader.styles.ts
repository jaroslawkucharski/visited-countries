import styled from 'styled-components'

export const LoaderButtonComponent = styled.div`
	text-align: center;
	display: flex;

	> div {
		width: 10px;
		height: 10px;
		background-color: ${({ theme }) => theme.colors.main};
		border-radius: 100%;
		display: inline-block;
		animation: animation-loader-button 1.4s infinite ease-in-out both;
	}

	.load1 {
		animation-delay: -0.32s;
	}

	.load2 {
		animation-delay: -0.16s;
	}

	@keyframes animation-loader-button {
		0%,
		80%,
		100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
`

export const LoaderComponent = styled.div`
	display: inline-block;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	&:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		border: ${({ theme }) => `6px solid ${theme.colors.secondary}`};
		border-color: ${({ theme }) =>
			`${theme.colors.secondary} transparent ${theme.colors.secondary} transparent`};
		animation: animation-loader 1.2s linear infinite;
	}

	@keyframes animation-loader {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
