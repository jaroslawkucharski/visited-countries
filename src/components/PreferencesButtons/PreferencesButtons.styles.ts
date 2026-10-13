import styled, { css } from 'styled-components'

interface PreferencesButtonsComponentProps {
	direction: 'row' | 'column'
}

export const PreferencesButtonsComponent = styled.div<PreferencesButtonsComponentProps>`
	${({ theme: { spaces }, direction }) =>
		css`
			display: flex;
			flex-direction: ${direction};
			justify-content: center;
			align-items: center;
			gap: ${spaces.tiny};
		`}
`
