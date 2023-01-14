import { FC } from 'react'

import { SpacerComponent } from './Spacer.styles'

interface SpacerProps {
	type?: 'horizontal' | 'vertical'
	space?: 'mini' | 'tiny' | 'small' | 'medium' | 'big' | 'large' | 'huge'
	'data-testid'?: string
}

export const Spacer: FC<SpacerProps> = ({
	type = 'horizontal',
	space = 'medium',
	'data-testid': dataTestId = 'spacer',
}) => (
	<SpacerComponent
		type={type}
		space={space}
		data-testid={dataTestId}
	/>
)

Spacer.displayName = 'Spacer'
