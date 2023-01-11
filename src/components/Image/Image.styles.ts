import styled, { DefaultTheme, css } from 'styled-components'

interface ImageComponentProps {
	variant?: 'default' | 'avatar'
}

const variantStyles = ({ colors }: DefaultTheme, variant = 'avatar') =>
	({
		avatar: css`
			cursor: pointer;
			width: 120px;
			height: 120px;
			background: ${colors.main};
			border: 2px solid ${colors.secondary};
			border-radius: 100%;
		`,
	}[variant])

export const ImageComponent = styled.img<ImageComponentProps>`
	${({ theme, variant }) => variantStyles(theme, variant)}
`
