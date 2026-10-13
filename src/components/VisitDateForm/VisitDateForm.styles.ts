import styled, { css } from 'styled-components'

export const VisitDateFormComponent = styled.div`
	${({ theme: { spaces } }) =>
		css`
			display: grid;
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
			gap: ${spaces.small};
		`}
`

export const FieldComponent = styled.label`
	${({ theme: { colors, spaces } }) =>
		css`
			display: flex;
			flex-direction: column;
			min-width: 0;
			gap: ${spaces.mini};
			color: ${colors.color5};
		`}
`

export const SelectFieldComponent = styled.select`
	${({ theme: { colors, spaces } }) =>
		css`
			width: 100%;
			min-width: 0;
			min-height: 44px;
			border-radius: 5px;
			background: ${colors.color3};
			border: solid 2px ${colors.color4};
			padding: ${spaces.small} ${spaces.tiny};
			color: ${colors.secondary};
			font-family: inherit;
			font-size: inherit;
			cursor: pointer;

			&:focus {
				outline: none;
				border: solid 2px ${colors.secondary};
			}

			&:disabled {
				cursor: not-allowed;
				opacity: 0.5;
			}
		`}
`
