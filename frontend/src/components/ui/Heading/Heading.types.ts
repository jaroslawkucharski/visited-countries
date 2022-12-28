import { ReactNode } from 'react'

export interface HeadingProps {
	level?: 1 | 2
	children: ReactNode
	align?: 'left' | 'center' | 'right'
}
