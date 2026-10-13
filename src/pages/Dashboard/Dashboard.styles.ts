import styled, { css } from 'styled-components'

export const MapTooltipComponent = styled.div`
	${({ theme: { colors, spaces } }) =>
		css`
			position: fixed;
			z-index: 2;
			pointer-events: none;
			padding: ${spaces.mini} ${spaces.tiny};
			border-radius: 5px;
			background: ${colors.secondary100};
			color: ${colors.main100};
			font-size: 14px;
			white-space: nowrap;
			box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

			.status {
				margin-left: ${spaces.tiny};
				font-size: 12px;
				opacity: 0.7;
			}
		`}
`
