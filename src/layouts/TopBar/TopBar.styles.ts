import styled, { css } from 'styled-components'

export const TopBarComponent = styled.div`
	width: 100%;

	${({ theme: { spaces, colors, breakpoints } }) =>
		css`
			padding: ${spaces.medium} ${spaces.big};
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: ${colors.main100};

			@media (max-width: ${breakpoints.mobile}px) {
				padding: ${spaces.big} ${spaces.big} calc(${spaces.medium} + ${spaces.tiny}) ${spaces.big};
				justify-content: center;
				flex-direction: column;
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

export const VisitedSectionComponent = styled.div`
	width: 100%;
	padding: 10px 20px;

	.quantity {
		padding: 0 2px;
		display: flex;
		justify-content: space-between;
		align-items: top;
		gap: 10px;
	}
`
