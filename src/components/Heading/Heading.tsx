import { FC, ReactNode } from 'react'

import { HeadingComponent } from './Heading.styles'

export interface HeadingProps {
	level?: 1 | 2 | 3
	children: ReactNode
	align?: 'left' | 'center' | 'right'
	id?: string
	'data-testid'?: string
}

export const Heading: FC<HeadingProps> = ({
	level = 1,
	children,
	align = 'center',
	id,
	'data-testid': dataTestId = 'heading',
}) => (
	<HeadingComponent
		as={`h${level}`}
		level={level}
		align={align}
		id={id}
		data-testid={dataTestId}
	>
		{children}
	</HeadingComponent>
)

Heading.displayName = 'Heading'
