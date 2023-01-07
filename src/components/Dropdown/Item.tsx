import { FC, ReactNode } from 'react'

import { ItemComponent } from './Dropdown.styles'

export interface ItemProps {
	to: string
	children: ReactNode
}

export const Item: FC<ItemProps> = ({ to, children }) => (
	<ItemComponent to={to}>{children}</ItemComponent>
)

Item.displayName = 'DropdownItem'
