import { Spinner } from 'components'
import { FC, ReactEventHandler, ReactNode } from 'react'

import { colors } from 'styles/theme'

// eslint-disable-next-line import/no-cycle
import { ButtonComponent } from './Button.styles'

export type Variants = 'primary' | 'secondary' | 'icon'

export interface CommonButtonProps {
	variant?: Variants
	children: ReactNode
	type?: 'button' | 'submit' | 'reset'
	onClick?: ReactEventHandler<HTMLButtonElement>
	width?: string
	hasFullWidth?: boolean
	isLoading?: boolean
	isDisabled?: boolean
	'data-testid'?: string
}

type IconVariantProps = {
	variant: 'icon'
	width?: never
	hasFullWidth?: never
}

type DefaultVariantProps = {
	variant?: 'primary' | 'secondary'
	width?: string | number
	hasFullWidth?: boolean
}

type ConditionalProps = DefaultVariantProps | IconVariantProps

export type ButtonProps = ConditionalProps & CommonButtonProps

export const Button: FC<ButtonProps> = ({
	variant = 'primary',
	children,
	type = 'button',
	onClick,
	width = 'auto',
	hasFullWidth = false,
	isLoading = false,
	isDisabled = false,
	'data-testid': dataTestId = 'button',
	...restProps
}) => (
	<ButtonComponent
		variant={variant}
		type={type}
		onClick={onClick}
		width={width}
		hasFullWidth={hasFullWidth}
		isLoading={isLoading}
		disabled={isDisabled}
		data-testid={dataTestId}
		{...restProps}
	>
		{isLoading ? <Spinner color={variant === 'secondary' ? '' : colors.dark100} /> : children}
	</ButtonComponent>
)

Button.displayName = 'novelUI/Components/Button'
