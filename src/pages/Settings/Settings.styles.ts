import styled, { css } from 'styled-components'

export const SettingsSectionComponent = styled.section`
	${({ theme: { spaces } }) =>
		css`
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: ${spaces.small};
		`}
`

export const SettingsRowComponent = styled.div`
	${({ theme: { spaces } }) =>
		css`
			display: grid;
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
			gap: ${spaces.small};
		`}
`
