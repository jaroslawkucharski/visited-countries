import styled, { css } from 'styled-components'

export const TopBarComponent = styled.div`
	width: 100%;

	${({ theme: { spaces } }) =>
		css`
			padding: ${spaces.medium} ${spaces.big};
			display: flex;
			justify-content: space-between;
			align-items: center;
		`}
`

export const SettingsComponent = styled.div`
	${({ theme: { spaces } }) =>
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			gap: ${spaces.tiny};
		`}
`
