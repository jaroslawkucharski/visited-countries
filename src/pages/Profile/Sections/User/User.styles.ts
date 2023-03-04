import styled, { css } from 'styled-components'

export const UserComponent = styled.div`
	width: 100%;
`

export const ImageComponent = styled.div`
	${({ theme: { spaces } }) =>
		css`
			width: 100%;
			display: flex;
			justify-content: space-between;
			gap: ${spaces.tiny};
		`}
`
