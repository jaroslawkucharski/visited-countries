import styled, { css } from 'styled-components'

export const WebMenuComponent = styled.div`
	height: calc(100% - 84px);

	${({ theme: { spaces, colors } }) =>
		css`
			padding: ${spaces.large} ${spaces.medium};
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: space-between;
			background: ${colors.main};
			position: fixed;
			left: 0;
			gap: 20px;
		`}
`

export const WebMenuItemComponent = styled.div`
	height: calc(100% - 84px);
	z-index: -1;

	${({ theme: { spaces, colors } }) =>
		css`
			padding: ${spaces.large} ${spaces.medium};
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: space-between;
			background: ${colors.color4};
			position: fixed;
			top: 84px;
			left: 0;

			animation: animation-list 0.2s;
			transform-origin: left;

			@keyframes animation-list {
				0% {
					transform: scaleX(0);
				}
				,
				100% {
					transform: scaleX(1);
				}
			}
		`}
`
