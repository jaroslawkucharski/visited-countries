import { FC } from 'react'

import { BreakComponent } from './Break.styles'

export interface BreakProps {
	width?: string
	'data-testid'?: string
}

export const Break: FC<BreakProps> = ({ width = '', 'data-testid': dataTestId = 'break' }) => (
	<BreakComponent
		width={width}
		data-testid={dataTestId}
	/>
)
