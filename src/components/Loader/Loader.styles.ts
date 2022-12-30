import styled from 'styled-components'

export const LoaderComponent = styled.div`
	text-align: center;
	display: flex;

	> div {
		width: 10px;
		height: 10px;
		background-color: ${({ theme }) => theme.colors.main};
		border-radius: 100%;
		display: inline-block;
		-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
		animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	}

	.bounce1 {
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}

	.bounce2 {
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;
	}

	@-webkit-keyframes sk-bouncedelay {
		0%,
		80%,
		100% {
			-webkit-transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
		}
	}

	@keyframes sk-bouncedelay {
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
