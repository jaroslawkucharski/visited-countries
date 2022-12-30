import styled, { css } from 'styled-components'

export const TopBarComponent = styled.div`
	width: 100%;

	${({ theme: { spaces, breakpoints } }) =>
		css`
			padding: ${spaces.medium} ${spaces.big};
			display: flex;
			justify-content: space-between;
			align-items: center;

			${breakpoints.mobile} {
				justify-content: center;
				flex-direction: column;
				gap: ${spaces.tiny};
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
		`}
`
