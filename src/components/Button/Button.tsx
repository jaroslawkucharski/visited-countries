import { FC, ReactEventHandler, ReactNode } from 'react'

import { Loader } from '../Loader'
import { ButtonComponent } from './Button.styles'

export interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'alert'
	type?: 'button' | 'submit' | 'reset'
	children: ReactNode
	action?: ReactEventHandler<HTMLButtonElement>
	hasFullWidth?: boolean
	hasOnlyIcon?: boolean
	align?: 'center' | 'left'
	isLoading?: boolean
	isDisabled?: boolean
	isDropdown?: boolean
	'data-testid'?: string
}

export const Button: FC<ButtonProps> = ({
	variant = 'primary',
	type = 'button',
	children,
	action,
	hasFullWidth = false,
	hasOnlyIcon = false,
	align = 'center',
	isLoading = false,
	isDisabled = false,
	isDropdown = false,
	'data-testid': dataTestId = 'button',
}) => (
	<ButtonComponent
		variant={variant}
		type={type}
		onClick={action}
		hasFullWidth={hasFullWidth}
		hasOnlyIcon={hasOnlyIcon}
		align={align}
		disabled={isDisabled}
		isDropdown={isDropdown}
		data-testid={dataTestId}
	>
		{isLoading ? <Loader data-testid="button-loader" /> : children}
	</ButtonComponent>
)

Button.displayName = 'Button'
