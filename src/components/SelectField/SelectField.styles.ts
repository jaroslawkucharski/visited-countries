import styled, { css } from 'styled-components'

import { fieldStyles } from 'styles/mixins'

export const SelectFieldComponent = styled.label`
	${({ theme: { colors, spaces } }) =>
		css`
			min-width: 0;
			display: flex;
			flex-direction: column;
			gap: ${spaces.mini};
			color: ${colors.color5};
		`}
`

export const SelectWrapperComponent = styled.div`
	position: relative;

	${({ theme: { colors, spaces } }) =>
		css`
			.icon {
				position: absolute;
				top: 50%;
				right: ${spaces.small};
				transform: translateY(-50%);
				color: ${colors.secondary};
				pointer-events: none;
			}
		`}
`

export const SelectComponent = styled.select`
	${({ theme }) =>
		css`
			${fieldStyles(theme)}
			width: 100%;
			min-width: 0;
			padding-right: 40px;
			appearance: none;
			font-family: inherit;
			font-size: inherit;
			cursor: pointer;

			&:disabled {
				cursor: not-allowed;
				opacity: 0.5;
			}
		`}
`
