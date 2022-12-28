import { ReactEventHandler, ReactNode } from 'react'

export interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'alert'
	children: ReactNode
	action: ReactEventHandler<HTMLButtonElement>
	hasFullWidth?: boolean
	hasOnlyIcon?: boolean
	isLoading?: boolean
	isDisabled?: boolean
}
