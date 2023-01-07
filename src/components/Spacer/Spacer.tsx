import { FC } from 'react'

import { SpacerComponent } from './Spacer.styles'

interface SpacerProps {
	type?: 'horizontal' | 'vertical'
	space?: 'mini' | 'tiny' | 'small' | 'medium' | 'big' | 'large' | 'huge'
}

export const Spacer: FC<SpacerProps> = ({ type = 'horizontal', space = 'medium' }) => (
	<SpacerComponent
		type={type}
		space={space}
	/>
)

Spacer.displayName = 'Spacer'
