import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface ItemComponentProps {
	islastitem?: string
}

export const DropdownComponent = styled.div`
	min-width: 200px;
	position: relative;
`

export const DropdownMenuComponent = styled.div`
	width: 100%;
	position: absolute;
	border-radius: 0 0 15px 15px;
	animation: animation-menu 0.2s;
	transform-origin: top;

	@keyframes animation-menu {
		0% {
			transform: scaleY(0);
		}
		,
		100% {
			transform: scaleY(1);
		}
	}

	${({ theme: { colors } }) =>
		css`
			padding: 0;
			background: ${colors.secondary};
		`}
`

export const ItemComponent = styled(NavLink)<ItemComponentProps>`
	cursor: pointer;
	width: 100%;
	display: block;
	text-decoration: none;
	display: flex;
	align-items: center;

	${({ theme: { colors, spaces }, islastitem }) =>
		css`
			color: ${colors.main};
			padding: ${spaces.small} ${spaces.medium} ${spaces.small} ${spaces.big};
			background: ${colors.secondary};
			gap: ${spaces.tiny};
			border-radius: ${islastitem === 'true' && `0 0 15px 15px`};

			&:hover {
				background: ${colors.color1};
				color: ${colors.main};
			}
		`}
`
