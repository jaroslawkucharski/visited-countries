import { Row } from 'simple-flexbox'
import styled, { css } from 'styled-components'

export const TopBarComponent = styled(Row)`
	width: 100%;

	${({ theme: { spaces } }) =>
		css`
			padding: ${spaces.big};
			gap: ${spaces.tiny};
		`}
`
