import styled, { css } from 'styled-components'

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

export const ImageComponent = styled.div`
	${({ theme: { spaces } }) =>
		css`
			width: 100%;
			display: flex;
			justify-content: center;
			gap: ${spaces.tiny};
		`}
`
