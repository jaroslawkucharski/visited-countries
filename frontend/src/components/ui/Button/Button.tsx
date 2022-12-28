import { FC, ReactEventHandler, ReactNode } from 'react'

import { Loader } from 'components/ui'

import { ButtonComponent } from './Button.styles'

interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'alert'
	children: ReactNode
	action: ReactEventHandler<HTMLButtonElement>
	hasFullWidth?: boolean
	hasOnlyIcon?: boolean
	isLoading?: boolean
	isDisabled?: boolean
}

export const Button: FC<ButtonProps> = ({
	variant = 'primary',
	children,
	action,
	hasFullWidth = false,
	hasOnlyIcon = false,
	isLoading = false,
	isDisabled = false,
}) => (
	<ButtonComponent
		variant={variant}
		onClick={action}
		hasFullWidth={hasFullWidth}
		hasOnlyIcon={hasOnlyIcon}
		disabled={isDisabled}
	>
		{isLoading ? <Loader /> : children}
	</ButtonComponent>
)
