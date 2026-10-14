import { FC, ReactNode } from 'react'

import { NavigareComponent } from './Link.styles'

interface LinkProps {
	to: string
	children: ReactNode
	ariaLabel?: string
	'data-testid'?: string
}

export const Link: FC<LinkProps> = ({
	to,
	children,
	ariaLabel,
	'data-testid': dataTestId = 'link',
}) => (
	<NavigareComponent
		to={to}
		aria-label={ariaLabel}
		data-testid={dataTestId}
	>
		{children}
	</NavigareComponent>
)

Link.displayName = 'Link'
