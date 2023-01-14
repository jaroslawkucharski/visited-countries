import { FC, ReactEventHandler, ReactNode } from 'react'

import { ItemComponent } from './Dropdown.styles'

export interface DropdownItemProps {
	to?: string
	action?: ReactEventHandler<HTMLAnchorElement>
	children: ReactNode
	isLastItem?: boolean
	'data-testid'?: string
}

export const DropdownItem: FC<DropdownItemProps> = ({
	to = '',
	action,
	children,
	isLastItem,
	'data-testid': dataTestId = 'dropdown-item',
}) => (
	<ItemComponent
		to={to}
		onClick={action}
		data-testid={dataTestId}
		isLastItem={isLastItem}
	>
		{children}
	</ItemComponent>
)

DropdownItem.displayName = 'DropdownItem'
