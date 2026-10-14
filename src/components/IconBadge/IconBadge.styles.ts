import styled, { css } from 'styled-components'

export const IconBadgeComponent = styled.span`
	${({ theme: { colors } }) =>
		css`
			position: relative;
			display: inline-flex;

			.count {
				position: absolute;
				top: -6px;
				right: -8px;
				left: auto;
				min-width: 14px;
				height: 14px;
				padding: 0 3px;
				border-radius: 7px;
				background: ${colors.errorText};
				color: ${colors.main};
				font-size: 9px;
				line-height: 14px;
				text-align: center;
			}
		`}
`
