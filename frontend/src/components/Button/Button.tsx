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
}) => (
	<ButtonComponent
		variant={variant}
		type={type}
		onClick={action}
		hasFullWidth={hasFullWidth}
		hasOnlyIcon={hasOnlyIcon}
		disabled={isDisabled}
	>
		{isLoading ? <Loader /> : children}
	</ButtonComponent>
)
