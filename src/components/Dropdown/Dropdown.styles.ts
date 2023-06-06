import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface DropdownComponentProps {
	islastitem?: string
	dropdownWith?: number | string
	dropdownContentWith?: number | string
}

export const DropdownComponent = styled.div<DropdownComponentProps>`
	position: relative;

	${({ dropdownWith = '220px' }) =>
		css`
			min-width: ${dropdownWith};
		`}
`

export const DropdownMenuComponent = styled.div<DropdownComponentProps>`
	margin-top: 2px;
	right: 0;
	position: absolute;
	border-radius: 0;
	animation: animation-menu 0.2s;
	transform-origin: top;
	z-index: 1;

	@keyframes animation-menu {
		0% {
			transform: scaleY(0);
		}
		,
		100% {
			transform: scaleY(1);
		}
	}

	${({ theme: { colors }, dropdownContentWith = '220px' }) =>
		css`
			padding: 0;
			background: ${colors.secondary100};
			min-width: ${dropdownContentWith};
		`}
`

export const ItemComponent = styled(NavLink)<DropdownComponentProps>`
	cursor: pointer;
	width: 100%;
	display: block;
	text-decoration: none;
	display: flex;
	align-items: center;

	${({ theme: { colors, font, spaces } }) =>
		css`
			font-size: ${font.sizes.s14};
			color: ${colors.main};
			padding: ${spaces.small} ${spaces.medium} ${spaces.small} ${spaces.medium};
			background: ${colors.secondary};
			gap: ${spaces.tiny};

			&:hover {
				background: ${colors.color1};
				color: ${colors.main};
			}
		`}
`
