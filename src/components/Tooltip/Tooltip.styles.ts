import styled, { css } from 'styled-components'

export const TooltipComponent = styled.div`
	${({ theme: { colors, spaces } }) =>
		css`
			min-width: 200px;
			max-width: 250px;
			background: ${colors.secondary};
			color: ${colors.main};
			padding: ${spaces.small} ${spaces.medium};
			text-align: center;
			z-index: 9999;
		`}
`
