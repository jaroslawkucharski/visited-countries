import styled, { DefaultTheme, css } from 'styled-components'

interface ButtonComponentProps {
	variant?: 'primary' | 'secondary' | 'alert'
	hasFullWidth?: boolean
	hasOnlyIcon?: boolean
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
			background: ${colors.alert};

			&:hover {
				background: ${colors.color5};
			}
		`,
	}[variant])

export const ButtonComponent = styled.button<ButtonComponentProps>`
	cursor: pointer;
	min-width: fit-content;
	min-height: 44px;
	max-height: 44px;
	border: 0;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	${({ theme: { spaces, font }, hasOnlyIcon, hasFullWidth }) =>
		css`
			width: ${!!hasFullWidth && '100%'};
			font-weight: ${font.weights.bold};
			padding: ${hasOnlyIcon ? `${spaces.tiny} ${spaces.small}` : `${spaces.tiny} ${spaces.big}`};
		`}

	${({ theme, variant }) => variantStyles(theme, variant)}
`