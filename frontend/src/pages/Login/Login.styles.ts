import { Column, Row } from 'simple-flexbox'
import styled, { css } from 'styled-components'

export const LoginColumnComponent = styled(Column)`
	width: 100%;

	${({ theme: { spaces } }) =>
		css`
			width: 400px;
			margin: 0 auto;
			padding: ${spaces.big};
			gap: ${spaces.tiny};
		`}
`

export const LoginRowComponent = styled(Row)`
	width: 100%;

	${({ theme: { spaces } }) =>
		css`
			padding: ${spaces.tiny};
			gap: ${spaces.tiny};
		`}
`
