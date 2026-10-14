import { DefaultTheme, css } from 'styled-components'

export const fieldStyles = ({ colors, spaces }: DefaultTheme) => css`
	min-height: 44px;
	border-radius: 5px;
	background: ${colors.color3};
	border: solid 2px ${colors.color4};
	padding: ${spaces.small} ${spaces.medium};
	color: ${colors.secondary};

	&:focus {
		outline: none;
		border: solid 2px ${colors.secondary};
	}
`
