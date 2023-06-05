import styled, { DefaultTheme, css } from 'styled-components'

interface HeadingComponentProps {
	type?: 'default' | 'dropdown' | 'label' | 'error'
	size?:
		| 'small'
		| 'medium'
		| 'big'
		| 'large'
		| 'huge'
		| 's12'
		| 's14'
		| 's16'
		| 's18'
		| 's28'
		| 's36'
		| 's64'
		| 's128'
	align?: 'left' | 'center' | 'right'
}

const typeStyles = ({ colors }: DefaultTheme, type = 'label') =>
	({
		default: css`
			color: ${colors.secondary100};
		`,
		dropdown: css`
			color: ${colors.main100};
		`,
		label: css`
			color: ${colors.color5};
		`,
		error: css`
			color: ${colors.error};
		`,
	}[type])

const sizeStyles = ({ font }: DefaultTheme, size = 'medium') =>
	({
		[size]: css`
			font-size: ${font.sizes[size as keyof typeof font.sizes]};
		`,
	}[size])

export const HeadingComponent = styled.p<HeadingComponentProps>`
	font-size: ${({ size }) => size};
	text-align: ${({ align }) => align};
	min-height: 24px;
	display: flex;
	align-items: center;
	gap: 5px;

	${({ theme, type }) => typeStyles(theme, type)};
	${({ theme, size }) => sizeStyles(theme, size)};
`
