import styled, { css } from 'styled-components'

export const ProfileColumnComponent = styled.div`
	${({ theme: { spaces, breakpoints } }) =>
		css`
			width: 400px;
			margin: 0 auto;
			padding: ${spaces.medium} 0 ${spaces.medium} ${spaces.big};
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			overflow: scroll;

			@media (max-width: ${breakpoints.mobile}px) {
				width: 100%;
				padding: ${spaces.medium} ${spaces.big};
				overflow: none;
			}
		`}
`

export const SettingsComponent = styled.div`
	${({ theme: { spaces } }) =>
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			gap: ${spaces.tiny};
			flex-wrap: wrap;
		`}
`
