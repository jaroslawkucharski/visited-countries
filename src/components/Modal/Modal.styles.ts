import styled, { css } from 'styled-components'

export const ModalContainerComponent = styled.div`
	${({ theme: { breakpoints, spaces, colors } }) =>
		css`
			width: 100vw;
			height: 100vh;
			position: fixed;
			left: 0;
			top: 0;
			display: grid;
			place-items: center;
			background-color: ${colors.secondary_opacity};

			@media (max-width: ${breakpoints.mobile}px) {
				padding: 0 ${spaces.medium};
				overflow: none;
			}
		`}
`

export const ModalComponent = styled.div`
	${({ theme: { breakpoints, colors, spaces } }) =>
		css`
			padding: ${spaces.big};
			width: 700px;
			border-radius: 10px;
			background-color: ${colors.main};
			position: relative;

			@media (max-width: ${breakpoints.mobile}px) {
				width: 100%;
			}
		`}
`

export const ModalHeadingComponent = styled.div`
	${({ theme: { colors, spaces } }) =>
		css`
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-content: center;

			> .close-icon {
				cursor: pointer;
				width: 30px;
				height: 30px;
				top: ${spaces.medium};
				right: ${spaces.medium};
				position: absolute;

				&:hover {
					color: ${colors.color5};
				}
			}
		`}
`

export const ModalActionsComponent = styled.div`
	${({ theme: { breakpoints, spaces } }) =>
		css`
			width: 100%;
			display: flex;
			justify-content: flex-end;
			gap: ${spaces.medium};

			@media (max-width: ${breakpoints.mobile}px) {
				flex-direction: column-reverse;
				justify-content: center;
				flex-wrap: wrap;
			}
		`}
`
