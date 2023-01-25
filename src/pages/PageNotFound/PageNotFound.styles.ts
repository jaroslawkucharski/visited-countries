import styled, { css } from 'styled-components'

export const ProfileColumnComponent = styled.div`
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