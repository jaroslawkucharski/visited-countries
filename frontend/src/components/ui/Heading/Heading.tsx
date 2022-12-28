import { FC } from 'react'

import { HeadingComponent } from './Heading.styles'
import { HeadingProps } from './Heading.types'

export const Heading: FC<HeadingProps> = ({ level = 1, children, align = 'center' }) => (
	<HeadingComponent
		as={`h${level}`}
		level={level}
		align={align}
	>
		{children}
	</HeadingComponent>
)
