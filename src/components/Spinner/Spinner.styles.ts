import styled, { css } from 'styled-components'

// eslint-disable-next-line import/no-cycle
import { SpinnerProps } from './Spinner'

export const SpinnerComponentWrapper = styled.span<SpinnerProps>`
	cursor: wait;
	position: absolute;
	width: 100%;
	height: 100%;
`

export const SpinnerComponent = styled.span<SpinnerProps>`
	${({ theme: { colors }, color }) =>
		css`
			&::before {
				content: '';
				top: 0;
				bottom: 0;
				margin: auto;
				left: 0;
				right: 0;
				width: 16px;
				height: 16px;
				border: 4px solid transparent;
				border-radius: 50%;
				border-top-color: ${color || colors.secondary100};
				position: absolute;
				animation: spinner-top 1s ease infinite;
			}

			&::after {
				content: '';
				top: 0;
				bottom: 0;
				margin: auto;
				left: 0;
				right: 0;
				width: 16px;
				height: 16px;
				border: 4px solid transparent;
				border-radius: 50%;
				border-bottom-color: ${color || colors.secondary100};
				border-right-color: ${color || colors.secondary100};
				opacity: 0.5;
				position: absolute;
				animation: spinner-bottom 1s ease-out infinite;
			}

			@keyframes spinner-top {
				from {
					transform: rotate(0turn);
				}

				to {
					transform: rotate(2turn);
				}
			}

			@keyframes spinner-bottom {
				0% {
					transform: rotate(0turn);
				}

				50% {
					transform: rotate(2turn);
				}

				100% {
					transform: rotate(1turn);
				}
			}
		`}
`
