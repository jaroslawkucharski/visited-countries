import { FC, ReactEventHandler, ReactNode } from 'react'

import { ItemComponent } from './Dropdown.styles'

export interface ItemProps {
	to?: string
	action?: ReactEventHandler<HTMLAnchorElement>
	children: ReactNode
}

export const Item: FC<ItemProps> = ({ to = '', action, children }) => (
	<ItemComponent
		to={to}
		onClick={action}
	>
		{children}
	</ItemComponent>
)

Item.displayName = 'DropdownItem'
