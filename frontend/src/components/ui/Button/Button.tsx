import { FC } from 'react'

import { Loader } from 'components/ui'

import { ButtonComponent } from './Button.styles'
import { ButtonProps } from './Button.types'

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
