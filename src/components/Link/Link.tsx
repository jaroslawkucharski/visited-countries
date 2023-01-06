import { FC, ReactNode } from 'react'

import { NavigareComponent } from './Link.styles'

interface LinkProps {
	to: string
	children: ReactNode
}

export const Link: FC<LinkProps> = ({ to, children }) => (
	<NavigareComponent to={to}>{children}</NavigareComponent>
)
