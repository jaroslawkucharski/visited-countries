import styled, { css } from 'styled-components'

export const MobileMenuComponent = styled.div`
	width: 100%;

	${({ theme: { spaces, colors } }) =>
		css`
			padding: ${spaces.medium} ${spaces.large} ${spaces.large} ${spaces.large};
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: ${colors.main};
			position: fixed;
			bottom: 0;
			gap: 20px;
			font-size: 2em;
		`}
`
