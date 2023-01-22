import styled, { css } from 'styled-components'

interface InputComponentProps {
	hasFullWidth?: boolean
	isError?: boolean
	isPassword?: boolean
	isDropdown?: boolean
}

interface PasswordMeterComponentProps {
	strength?: number
	color?: string
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

	${({ theme: { colors, spaces }, hasFullWidth, isError, isPassword, isDropdown }) =>
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
			border-radius: ${isDropdown && '15px 15px 0 0'};
		`}
`

export const IconComponent = styled.span`
	cursor: pointer;
	top: 12.5px;
	right: 20px;
	position: absolute;
	font-size: 18px;
`

export const PasswordMeterComponent = styled.div<PasswordMeterComponentProps>`
	width: 100%;
	height: 24px;
	left: 0;
	bottom: -24px;
	position: absolute;
	border-radius: 2px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.strength {
		width: calc(100% - 120px);
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	${({ theme: { colors }, strength = 0, color = 'error' }) =>
		css`
			.very-weak,
			.weak,
			.medium,
			.good,
			.very-good {
				width: 35px;
				height: 3px;
				margin: 0 2px;
				height: 3px;
				background: ${colors[color as keyof typeof colors]};
			}

			.very-weak {
				display: ${strength < 20 && 'none'};
			}

			.weak {
				display: ${strength < 40 && 'none'};
			}

			.medium {
				display: ${strength < 60 && 'none'};
			}

			.good {
				display: ${strength < 80 && 'none'};
			}

			.very-good {
				display: ${strength !== 100 && 'none'};
			}
		`}
`
