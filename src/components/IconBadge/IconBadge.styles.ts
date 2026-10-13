import styled, { css } from 'styled-components'

interface IconBadgeComponentProps {
	placement: 'corner' | 'outside'
}

export const IconBadgeComponent = styled.span<IconBadgeComponentProps>`
	${({ theme: { colors }, placement }) =>
		css`
			position: relative;
			display: inline-flex;

			.count {
				position: absolute;
				top: ${placement === 'outside' ? '-8px' : '-6px'};
				right: ${placement === 'outside' ? 'auto' : '-8px'};
				left: ${placement === 'outside' ? 'calc(100% + 1px)' : 'auto'};
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
