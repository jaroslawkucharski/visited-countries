import styled, { css } from 'styled-components'

export const TopBarComponent = styled.div`
	width: 100%;

	${({ theme: { spaces, colors, breakpoints } }) =>
		css`
			padding: ${spaces.small} ${spaces.big};
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: ${colors.main};
			// position: fixed;

			@media (max-width: ${breakpoints.mobile}px) {
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
			flex-wrap: wrap;
		`}
`

export const SettingsMobileComponent = styled.div`
	${({ theme: { spaces, breakpoints } }) =>
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			gap: ${spaces.tiny};
			flex-wrap: wrap;

			@media (max-width: ${breakpoints.mobile}px) {
				display: none;
			}
		`}
`
