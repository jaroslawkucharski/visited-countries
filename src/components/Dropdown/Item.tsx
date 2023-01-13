import { FC, ReactEventHandler, ReactNode } from 'react'

import { ItemComponent } from './Dropdown.styles'

export interface ItemProps {
	to?: string
	action?: ReactEventHandler<HTMLAnchorElement>
	children: ReactNode
	'data-testid'?: string
}

export const Item: FC<ItemProps> = ({
	to = '',
	action,
	children,
	'data-testid': dataTestId = 'dropdown-item',
}) => (
	<ItemComponent
		to={to}
		onClick={action}
		data-testid={dataTestId}
	>
		{children}
	</ItemComponent>
)

Item.displayName = 'DropdownItem'
