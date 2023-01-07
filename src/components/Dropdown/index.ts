import { FC } from 'react'

import { Dropdown as DropdownComponent, DropdownProps as DropdownComponentProps } from './Dropdown'
import { Item, ItemProps } from './Item'

interface DropdownComposition {
	Item: FC<ItemProps>
}

type DropdownProps = FC<DropdownComponentProps> & DropdownComposition

const Dropdown: DropdownProps = DropdownComponent as DropdownProps

Dropdown.Item = Item

export { Dropdown }
