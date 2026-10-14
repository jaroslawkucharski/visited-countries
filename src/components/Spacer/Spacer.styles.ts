import styled, { css } from 'styled-components'

interface SpacerComponentProps {
	type?: 'horizontal' | 'vertical'
	space?: 'mini' | 'tiny' | 'small' | 'medium' | 'big' | 'large' | 'huge'
}

export const SpacerComponent = styled.div<SpacerComponentProps>`
	${({ theme: { spaces }, type, space = 'medium' }) =>
		css`
			width: ${type === 'horizontal' && spaces[space]};
			height: ${type === 'vertical' && spaces[space]};
		`}
`
