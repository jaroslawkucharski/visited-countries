import styled, { css } from 'styled-components'

interface InputComponentProps {
	hasFullWidth?: boolean
	isError?: boolean
	isPassword?: boolean
}

export const LabelComponent = styled.label<InputComponentProps>`
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

export const InputWrapperComponent = styled.div`
	position: relative;
`

export const InputComponent = styled.input<InputComponentProps>`
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

export const IconComponent = styled.span`
	cursor: pointer;
	top: 12.5px;
	right: 20px;
	position: absolute;
	font-size: 18px;
`
