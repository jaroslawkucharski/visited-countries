import styled, { DefaultTheme, css } from 'styled-components'

interface HeadingComponentProps {
	type?: 'default' | 'label' | 'error'
	size?: 'small' | 'medium' | 'big'
	align?: 'left' | 'center' | 'right'
}

const typeStyles = ({ colors }: DefaultTheme, type = 'label') =>
	({
		default: css`
			color: ${colors.secondary};
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
		small: css`
			font-size: ${font.sizes.error};
		`,
		medium: css`
			font-size: ${font.sizes.default};
		`,
		big: css`
			font-size: ${font.sizes.info};
		`,
	}[size])

export const HeadingComponent = styled.p<HeadingComponentProps>`
	font-size: ${({ size }) => size};
	text-align: ${({ align }) => align};

	${({ theme, type }) => typeStyles(theme, type)};
	${({ theme, size }) => sizeStyles(theme, size)};
`