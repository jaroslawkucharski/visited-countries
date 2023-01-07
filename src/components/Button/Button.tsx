import { Loader } from 'components'
import { FC, ReactEventHandler, ReactNode } from 'react'

import { ButtonComponent } from './Button.styles'

interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'alert'
	type?: 'button' | 'submit' | 'reset'
	children: ReactNode
	action?: ReactEventHandler<HTMLButtonElement>
	hasFullWidth?: boolean
	hasOnlyIcon?: boolean
	isLoading?: boolean
	isDisabled?: boolean
	isDropdown?: boolean
}

export const Button: FC<ButtonProps> = ({
	variant = 'primary',
	type = 'button',
	children,
	action,
	hasFullWidth = false,
	hasOnlyIcon = false,
	isLoading = false,
	isDisabled = false,
	isDropdown = false,
}) => (
	<ButtonComponent
		variant={variant}
		type={type}
		onClick={action}
		hasFullWidth={hasFullWidth}
		hasOnlyIcon={hasOnlyIcon}
		disabled={isDisabled}
		isDropdown={isDropdown}
	>
		{isLoading ? <Loader /> : children}
	</ButtonComponent>
)

Button.displayName = 'Button'
