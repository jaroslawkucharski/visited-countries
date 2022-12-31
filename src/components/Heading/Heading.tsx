import { FC, ReactNode } from 'react'

import { HeadingComponent } from './Heading.styles'

interface HeadingProps {
	level?: 1 | 2
	children: ReactNode
	align?: 'left' | 'center' | 'right'
}

export const Heading: FC<HeadingProps> = ({ level = 1, children, align = 'center' }) => (
	<HeadingComponent
		as={`h${level}`}
		level={level}
		align={align}
	>
		{children}
	</HeadingComponent>
)