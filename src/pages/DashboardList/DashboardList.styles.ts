import styled, { css } from 'styled-components'

export const ProfileColumnComponent = styled.div`
	${({ theme: { spaces, breakpoints } }) =>
		css`
			margin: 0 auto;
			padding: 0 0 0 ${spaces.big};
			align-items: center;
			overflow: scroll;
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
