import styled, { css } from 'styled-components'

interface InputProps {
	hasFullWidth?: boolean
	isError?: boolean
	isPassword?: boolean
}

export const InputComponent = styled.input<InputProps>`
	min-width: fit-content;
	min-height: 44px;
	max-height: 44px;
	border-radius: 15px;

	${({ theme: { colors, spaces }, hasFullWidth, isError, isPassword }) =>
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
			padding-right: ${isPassword && `calc(${spaces.big} + ${spaces.tiny})`};
		`}
`

export const LabelComponent = styled.label<InputProps>`
	${({ theme: { colors, spaces }, hasFullWidth }) =>
		css`
			width: ${!!hasFullWidth && '100%'};
			color: ${colors.color5};
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: ${spaces.mini};
		`}
`

export const IconComponent = styled.span`
	cursor: pointer;
	margin-top: 12.5px;
	margin-left: -36px;
	position: absolute;
	font-size: 18px;
`
