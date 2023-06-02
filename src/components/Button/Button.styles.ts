import styled, { DefaultTheme, css } from 'styled-components'

// eslint-disable-next-line import/no-cycle
import { CommonButtonProps } from './Button'

const variantStyles = ({ colors }: DefaultTheme, variant = 'primary') =>
	({
		primary: css`
			color: ${colors.main100};
			background: ${colors.secondary100};

			&:hover {
				background: ${colors.secondary80};
			}

			&:active::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 0;
				height: 0;
				border-radius: 50%;
				transform: translate(-50%, -50%);
				background-color: ${colors.secondary50};
				animation: ripple 0.5s ease-out;
			}

			@keyframes ripple {
				to {
					width: 200%;
					padding-bottom: 200%;
					opacity: 0;
				}
			}

			&:disabled,
			&[disabled] {
				color: ${colors.main50};
				background: ${colors.secondary50};
				cursor: not-allowed;
			}
		`,
		secondary: css`
			color: ${colors.secondary100};
			background: ${colors.main100};
			border: 2px solid ${colors.secondary100};

			&:hover {
				color: ${colors.main100};
				background: ${colors.secondary100};
			}

			&:active::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 0;
				height: 0;
				border-radius: 50%;
				transform: translate(-50%, -50%);
				background-color: ${colors.main50};
				animation: ripple 0.5s ease-out;
			}

			@keyframes ripple {
				to {
					width: 200%;
					padding-bottom: 200%;
					opacity: 0;
				}
			}

			&:disabled,
			&[disabled] {
				color: ${colors.secondary50};
				background: ${colors.main100};
				border: 2px solid ${colors.secondary50};
				cursor: not-allowed;
			}
		`,
		alert: css`
			color: ${colors.secondary};
			background: ${colors.error};

			&:hover {
				background: ${colors.color5};
			}

			&:active::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 0;
				height: 0;
				border-radius: 50%;
				transform: translate(-50%, -50%);
				background-color: ${colors.secondary50};
				animation: ripple 0.5s ease-out;
			}

			@keyframes ripple {
				to {
					width: 200%;
					padding-bottom: 200%;
					opacity: 0;
				}
			}

			&:disabled,
			&[disabled] {
				background: ${colors.color5};
				color: ${colors.main};
				cursor: not-allowed;
			}
		`,
		icon: css`
			padding: 13px;
			min-width: 42px;
			width: 42px;
			height: 42px;
			color: ${colors.main100};
			background: ${colors.secondary100};

			&:hover {
				background: ${colors.secondary80};
			}

			&:active::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 0;
				height: 0;
				border-radius: 50%;
				transform: translate(-50%, -50%);
				background-color: ${colors.secondary50};
				animation: ripple 0.5s ease-out;
			}

			@keyframes ripple {
				to {
					width: 200%;
					padding-bottom: 200%;
					opacity: 0;
				}
			}

			&:disabled,
			&[disabled] {
				color: ${colors.main50};
				background: ${colors.secondary50};
				cursor: not-allowed;
			}
		`,
	}[variant])

export const ButtonComponent = styled.button<CommonButtonProps>`
	cursor: pointer;
	position: relative;
	overflow: hidden;
	padding: 13px 16px;
	min-width: 160px;
	height: 42px;
	border: 0;
	border-radius: 50px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	transition: background 0.4s;

	${({ theme: { font }, width, hasFullWidth }) =>
		css`
			width: ${width};
			width: ${hasFullWidth && '100%'};
			border-radius: 0px;
			font-size: ${font.sizes.s16};
			font-weight: ${font.weights.regular};
		`}

	${({ theme, variant }) => variantStyles(theme, variant)}
`
