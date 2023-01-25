import styled, { css } from 'styled-components'

export const LoginColumnComponent = styled.div`
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
				height: calc(100vh - 172px);
			}
		`}
`

export const LoginRowComponent = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
