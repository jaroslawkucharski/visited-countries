import styled, { css } from 'styled-components'

export const MobileMenuComponent = styled.div`
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
			font-size: 2em;
		`}
`
