import { FC, ReactNode } from 'react'

import { HeadingComponent } from './Paragraph.styles'

interface ParagraphProps {
	type?: 'default' | 'label' | 'error'
	children: ReactNode
	size?: 'small' | 'medium' | 'big' | 'large' | 'huge'
	align?: 'left' | 'center' | 'right'
	'data-testid'?: string
}

export const Paragraph: FC<ParagraphProps> = ({
	type = 'default',
	children,
	size = 'medium',
	align = 'center',
	'data-testid': dataTestId = 'paragraph',
}) => (
	<HeadingComponent
		type={type}
		size={size}
		align={align}
		data-testid={dataTestId}
	>
		{children}
	</HeadingComponent>
)

Paragraph.displayName = 'Paragraph'
