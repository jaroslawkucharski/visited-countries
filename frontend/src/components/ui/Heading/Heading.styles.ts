import styled, { DefaultTheme, css } from 'styled-components'

import { HeadingProps } from './Heading.types'

const levelStyles = (theme: DefaultTheme, variant = 'primary') =>
	({
		h1: css`
			font-weight: ${theme.weights.medium};
			font-size: 28px;
			line-height: 54px;
			letter-spacing: 0.2em;
			color: ${theme.colors.color1};
			text-transform: uppercase;
		`,
		h2: css`
			font-weight: ${theme.weights.regular};
			font-size: 18px;
			line-height: 36px;
			letter-spacing: 0.05em;
			color: ${theme.colors.color2};
		`,
	}[variant])

export const HeadingComponent = styled.h1<HeadingProps>`
	text-align: ${({ align }) => align};

	${({ theme, level }) => levelStyles(theme, `h${level}`)};
`
