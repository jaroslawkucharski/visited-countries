import styled, { css } from 'styled-components'

export const UserComponent = styled.div`
	width: 100%;
`

export const ImageComponent = styled.div`
	${({ theme: { spaces, colors } }) =>
		css`
			width: 100%;
			display: flex;
			justify-content: center;
			// gap: ${spaces.tiny};

			> .empty-avatar {
				background: ${colors.main};
				border: 2px solid ${colors.secondary};
				border-radius: 100%;
				font-size: 100px;
				display: block;
			}
		`}
`
