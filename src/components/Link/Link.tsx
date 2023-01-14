import { FC, ReactNode } from 'react'

import { NavigareComponent } from './Link.styles'

interface LinkProps {
	to: string
	children: ReactNode
	'data-testid'?: string
}

export const Link: FC<LinkProps> = ({ to, children, 'data-testid': dataTestId = 'link' }) => (
	<NavigareComponent
		to={to}
		data-testid={dataTestId}
	>
		{children}
	</NavigareComponent>
)

Link.displayName = 'Link'
