import { FC, ReactEventHandler, ReactNode } from 'react'

import { ItemComponent } from './Dropdown.styles'

export interface ItemProps {
	to?: string
	action?: ReactEventHandler<HTMLAnchorElement>
	children: ReactNode
	isLastItem?: boolean
	'data-testid'?: string
}

export const Item: FC<ItemProps> = ({
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

Item.displayName = 'DropdownItem'
