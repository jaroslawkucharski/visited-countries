import { FC, ReactNode } from 'react'

import { HeadingComponent } from './Paragraph.styles'

interface ParagraphProps {
	type?: 'default' | 'label' | 'error'
	children: ReactNode
	size?: 'small' | 'medium' | 'big'
	align?: 'left' | 'center' | 'right'
}

export const Paragraph: FC<ParagraphProps> = ({
	type = 'default',
	children,
	size = 'medium',
	align = 'center',
}) => (
	<HeadingComponent
		type={type}
		size={size}
		align={align}
	>
		{children}
	</HeadingComponent>
)

Paragraph.displayName = 'Paragraph'
