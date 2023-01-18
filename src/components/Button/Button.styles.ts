import styled, { DefaultTheme, css } from 'styled-components'

interface ButtonComponentProps {
	variant?: 'primary' | 'secondary' | 'alert'
	hasFullWidth?: boolean
	hasOnlyIcon?: boolean
	align?: 'center' | 'left'
	isDropdown?: boolean
}

const variantStyles = ({ colors }: DefaultTheme, variant = 'primary') =>
	({
		primary: css`
			color: ${colors.main};
			background: ${colors.secondary};

			&:hover {
				background: ${colors.color1};
			}

			&:disabled,
			&[disabled] {
				background: ${colors.color5};
				color: ${colors.main};
				cursor: not-allowed;
			}
		`,
		secondary: css`
			color: ${colors.secondary};
			background: ${colors.main};
			border: 2px solid ${colors.secondary};

			&:hover {
				background: ${colors.secondary};
				color: ${colors.main};
			}
		`,
		alert: css`
			color: ${colors.secondary};
			background: ${colors.error};

			&:hover {
				background: ${colors.color5};
			}
		`,
	}[variant])

const alignStyles = (align = 'center') =>
	({
		center: css`
			justify-content: center;
		`,
		left: css`
			justify-content: flex-start;
		`,
	}[align])

export const ButtonComponent = styled.button<ButtonComponentProps>`
	cursor: pointer;
	min-width: fit-content;
	min-height: 44px;
	max-height: 44px;
	border: 0;
	border-radius: 15px;
	display: flex;
	align-items: center;
	gap: 8px;
	transition: 0.2s;

	${({ theme: { spaces, font }, hasOnlyIcon, hasFullWidth, isDropdown }) =>
		css`
			width: ${hasFullWidth && '100%'};
			font-weight: ${font.weights.bold};
			padding: ${hasOnlyIcon ? `${spaces.tiny} ${spaces.small}` : `${spaces.tiny} ${spaces.big}`};
			border-radius: ${isDropdown && '15px 15px 0 0'};
		`}

	${({ theme, variant }) => variantStyles(theme, variant)}
	${({ align }) => alignStyles(align)}
`
