import styled, { DefaultTheme, css } from 'styled-components'

interface ButtonComponentProps {
	variant?: 'primary' | 'secondary' | 'alert'
	hasFullWidth?: boolean
	hasOnlyIcon?: boolean
}

const variantStyles = (theme: DefaultTheme, variant = 'primary') =>
	({
		primary: css`
			color: ${theme.colors.main};
			background: ${theme.colors.secondary};

			&:hover {
				background: ${theme.colors.color1};
			}

			&:disabled,
			&[disabled] {
				background: ${theme.colors.color5};
				color: ${theme.colors.main};
				cursor: not-allowed;
			}
		`,
		secondary: css`
			color: ${theme.colors.secondary};
			background: ${theme.colors.main};
			border: 2px solid ${theme.colors.secondary};

			&:hover {
				background: ${theme.colors.secondary};
				color: ${theme.colors.main};
			}
		`,
		alert: css`
			color: ${theme.colors.secondary};
			background: ${theme.colors.alert};

			&:hover {
				background: ${theme.colors.color5};
			}
		`,
	}[variant])

export const ButtonComponent = styled.button<ButtonComponentProps>`
	cursor: pointer;
	padding: ${({ theme, hasOnlyIcon }) =>
		hasOnlyIcon
			? `${theme.spaces.tiny} ${theme.spaces.small}`
			: `${theme.spaces.tiny} ${theme.spaces.big}`};
	width: ${({ hasFullWidth }) => !!hasFullWidth && '100%'};
	min-width: fit-content;
	min-height: 44px;
	max-height: 44px;
	border: 0;
	border-radius: 15px;
	font-weight: ${({ theme }) => theme.weights.bold};
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	${({ theme, variant }) => variantStyles(theme, variant)}
`
