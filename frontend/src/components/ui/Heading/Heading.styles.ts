import styled, { DefaultTheme, css } from 'styled-components'

import { HeadingProps } from './Heading.types'

const levelStyles = (theme: DefaultTheme, variant = 'primary') =>
	({
		h1: css`
			font-weight: ${theme.weights.medium};
			font-size: ${theme.fontSizes.h1};
			line-height: ${theme.lineHeight.h1};
			letter-spacing: ${theme.letterSpacing.h1};
			color: ${theme.colors.color1};
			text-transform: uppercase;
		`,
		h2: css`
			font-weight: ${theme.weights.regular};
			font-size: ${theme.fontSizes.h2};
			line-height: ${theme.lineHeight.h2};
			letter-spacing: ${theme.letterSpacing.h2};
			color: ${theme.colors.color2};
		`,
	}[variant])

export const HeadingComponent = styled.h1<HeadingProps>`
	text-align: ${({ align }) => align};

	${({ theme, level }) => levelStyles(theme, `h${level}`)};
`
