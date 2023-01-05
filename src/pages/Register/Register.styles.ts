import styled, { css } from 'styled-components'

export const RegisterColumnComponent = styled.div`
	${({ theme: { spaces, breakpoints } }) =>
		css`
			width: 400px;
			margin: 0 auto;
			padding: ${spaces.medium} ${spaces.big};
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			@media (max-width: ${breakpoints.mobile}px) {
				width: 100%;
			}
		`}
`

export const RegisterRowComponent = styled.div`
	width: 100%;

	${({ theme: { spaces } }) =>
		css`
			padding: ${spaces.tiny};
			display: flex;
			justify-content: center;
			align-items: center;
		`}
`
