import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const DropdownComponent = styled.div`
	min-width: fit-content;
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

	${({ theme: { colors, spaces } }) =>
		css`
			background: ${colors.secondary};
			padding: ${spaces.small} 0;
		`}
`

export const ItemComponent = styled(NavLink)`
	cursor: pointer;
	width: 100%;
	display: block;
	text-decoration: none;
	display: flex;
	align-items: center;

	${({ theme: { colors, spaces } }) =>
		css`
			color: ${colors.main};
			padding: ${spaces.small};
			background: ${colors.secondary};
			gap: ${spaces.tiny};

			&:hover {
				background: ${colors.color1};
				color: ${colors.main};
			}
		`}
`
