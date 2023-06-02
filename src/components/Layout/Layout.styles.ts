import styled, { css } from 'styled-components'

interface LayoutComponentProps {
	image?: string
}

interface PresentionalComponentProps {
	image?: string
}

export const LayoutComponent = styled.div<LayoutComponentProps>`
	${({ theme: { breakpoints }, image }) =>
		css`
			width: 100%;
			min-height: calc(100vh - 84px);
			background-image: url(${image});
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			overflow-y: auto;
			position: relative;

			@media (max-width: ${breakpoints.mobile}px) {
				width: 100%;
				background-image: none;
				height: calc(100vh - 112px);
			}
		`}
`

export const PresentionalComponent = styled.div<PresentionalComponentProps>`
	${({ theme: { spaces, breakpoints }, image }) =>
		css`
			width: calc(100% - 600px);
			padding: calc(${spaces.huge} + ${spaces.huge}) ${spaces.huge};
			display: ${!image && 'none'};

			@media (max-width: ${breakpoints.mobile}px) {
				display: none;
			}

			@media (max-width: ${breakpoints.tablet}px) {
				display: none;
			}
		`}
`

export const ChildrenComponent = styled.div`
	${({ theme: { spaces, colors, breakpoints } }) =>
		css`
			width: 400px;
			min-height: calc(100vh - 84px);
			margin: 0 auto;
			padding: ${spaces.huge} ${spaces.big};
			background: ${colors.main};
			display: flex;
			flex-direction: column;
			align-items: center;

			@media (max-width: ${breakpoints.mobile}px) {
				width: 100%;
			}
		`}
`
