import styled, { DefaultTheme, css } from 'styled-components'

interface HeadingComponentProps {
	level?: 1 | 2 | 3
	align?: 'left' | 'center' | 'right'
}

const levelStyles = ({ font, colors }: DefaultTheme, level = 'h1') =>
	({
		h1: css`
			font-weight: ${font.weights.medium};
			font-size: ${font.sizes.h1};
			line-height: ${font.lineHeight.h1};
			letter-spacing: ${font.letterSpacing.h1};
			color: ${colors.color1};
			text-transform: uppercase;
		`,
		h2: css`
			font-weight: ${font.weights.regular};
			font-size: ${font.sizes.h2};
			line-height: ${font.lineHeight.h2};
			letter-spacing: ${font.letterSpacing.h2};
			color: ${colors.color2};
		`,
		h3: css`
			font-weight: ${font.weights.regular};
			font-size: ${font.sizes.h1};
			line-height: ${font.lineHeight.h2};
			letter-spacing: ${font.letterSpacing.h2};
			color: ${colors.color2};
		`,
	}[level])

export const HeadingComponent = styled.h1<HeadingComponentProps>`
	text-align: ${({ align }) => align};

	${({ theme, level }) => levelStyles(theme, `h${level}`)};
`
