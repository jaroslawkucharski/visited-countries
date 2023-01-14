import { FC } from 'react'

import { BreakComponent } from './Break.styles'

export interface BreakProps {
	'data-testid'?: string
}

export const Break: FC<BreakProps> = ({ 'data-testid': dataTestId = 'break' }) => (
	<BreakComponent data-testid={dataTestId} />
)
