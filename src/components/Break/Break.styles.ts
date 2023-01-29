import styled, { css } from 'styled-components'

export const BreakComponent = styled.hr`
	width: 100%;

	${({ theme: { colors } }) =>
		css`
			border: 0.5px solid ${colors.color5};
		`}
`
