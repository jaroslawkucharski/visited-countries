import styled, { css } from 'styled-components'

interface InputProps {
	hasFullWidth?: boolean
	isError?: boolean
}

export const InputComponent = styled.input<InputProps>`
	min-width: fit-content;
	min-height: 44px;
	max-height: 44px;
	border-radius: 15px;

	${({ theme: { colors, spaces }, hasFullWidth = false, isError = false }) =>
		css`
			width: ${hasFullWidth && '100%'};
			background: ${colors.color3};
			border: solid 2px ${colors.color4};
			padding: ${spaces.small} ${spaces.medium};
			color: ${colors.secondary};

			&:focus {
				outline: none;
				border: solid 2px ${colors.secondary};
			}

			border: ${isError && `solid 2px ${colors.error}`};
		`}
`

export const LabelComponent = styled.label<InputProps>`
	${({ theme: { colors }, hasFullWidth }) =>
		css`
			width: ${!!hasFullWidth && '100%'};
			color: ${colors.color5};
		`}
`

export const ErrorComponent = styled.p`
	${({ theme: { colors, font } }) =>
		css`
			font-size: ${font.sizes.error};
			color: ${colors.error};
		`}
`
