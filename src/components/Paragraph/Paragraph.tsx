import { FC, ReactNode } from 'react'

import { HeadingComponent } from './Paragraph.styles'

export interface ParagraphProps {
	type?: 'default' | 'dropdown' | 'label' | 'error'
	children: ReactNode
	size?:
		| 'small'
		| 'medium'
		| 'big'
		| 'large'
		| 'huge'
		| 's12'
		| 's14'
		| 's16'
		| 's18'
		| 's28'
		| 's36'
		| 's64'
		| 's128'
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
