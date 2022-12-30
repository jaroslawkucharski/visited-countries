import styled, { css } from 'styled-components'

export const LoginColumnComponent = styled.div`
	width: 100%;

	${({ theme: { spaces } }) =>
		css`
			width: 400px;
			margin: 0 auto;
			padding: 0 ${spaces.big};
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${spaces.tiny};
		`}
`

export const LoginRowComponent = styled.div`
	width: 100%;

	${({ theme: { spaces } }) =>
		css`
			padding: ${spaces.tiny};
			display: flex;
			justify-content: center;
			align-items: center;
			gap: ${spaces.tiny};
		`}
`
