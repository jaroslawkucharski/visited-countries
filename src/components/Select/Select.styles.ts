import styled, { css } from 'styled-components'

interface SelectComponentProps {
	hasFullWidth?: boolean
}

interface ItemComponentProps {
	isLastItem?: boolean
}

export const SelectComponent = styled.div<SelectComponentProps>`
	min-width: 200px;
	position: relative;

	${({ hasFullWidth }) =>
		css`
			width: ${!!hasFullWidth && '100%'};
		`}
`

export const SelectMenuComponent = styled.div`
	width: 100%;
	max-height: 200px;
	position: absolute;
	border-radius: 0 0 15px 15px;
	animation: animation-menu 0.2s;
	transform-origin: top;
	overflow: scroll;

	${({ theme: { colors } }) =>
		css`
			background: ${colors.secondary};
			color: ${colors.main};
		`}

	@keyframes animation-menu {
		0% {
			transform: scaleY(0);
		}
		,
		100% {
			transform: scaleY(1);
		}
	}
`

export const ItemComponent = styled.div<ItemComponentProps>`
	cursor: pointer;
	width: 100%;
	display: block;
	display: flex;
	align-items: center;

	${({ theme: { colors, spaces } }) =>
		css`
			color: ${colors.main};
			padding: ${spaces.small} ${spaces.medium};
			background: ${colors.secondary};
			gap: ${spaces.tiny};

			&:hover {
				background: ${colors.color1};
				color: ${colors.main};
			}
		`}
`

export const EmptyListComponent = styled.div`
	width: 100%;
	display: block;
	display: flex;
	align-items: center;

	${({ theme: { colors, spaces, font } }) =>
		css`
			color: ${colors.main};
			padding: ${spaces.small} ${spaces.medium};
			background: ${colors.secondary};
			gap: ${spaces.tiny};

			> svg {
				font-size: ${font.sizes.icon};
			}
		`}
`

export const IconComponent = styled.span`
	cursor: pointer;
	bottom: 12.5px;
	right: 20px;
	position: absolute;
	font-size: 18px;
`
