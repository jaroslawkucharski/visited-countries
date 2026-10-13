import styled, { css } from 'styled-components'

export const VisitDateFormComponent = styled.div`
	${({ theme: { spaces, breakpoints } }) =>
		css`
			display: grid;
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
			gap: ${spaces.small};

			@media (max-width: ${breakpoints.mobile}px) {
				grid-template-columns: minmax(0, 1fr);
			}
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
			background-color: ${colors.color3};
			border: solid 2px ${colors.color4};
			padding: ${spaces.small} 40px ${spaces.small} ${spaces.small};
			color: ${colors.secondary};
			appearance: none;
			background-image: url('data:image/svg+xml,${encodeURIComponent(
				`<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1.5l5 5 5-5' fill='none' stroke='${colors.secondary}' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
			)}');
			background-repeat: no-repeat;
			background-position: right ${spaces.small} center;
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
