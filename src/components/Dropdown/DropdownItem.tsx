import { FC, ReactEventHandler, ReactNode } from 'react'

import { ItemComponent } from './Dropdown.styles'

export interface DropdownItemProps {
	to?: string
	action?: ReactEventHandler<HTMLAnchorElement>
	children: ReactNode
	islastitem?: boolean
	'data-testid'?: string
}

export const DropdownItem: FC<DropdownItemProps> = ({
	to = '',
	action,
	children,
	islastitem,
	'data-testid': dataTestId = 'dropdown-item',
}) => (
	<ItemComponent
		to={to}
		onClick={action}
		data-testid={dataTestId}
		islastitem={String(islastitem)}
	>
		{children}
	</ItemComponent>
)

DropdownItem.displayName = 'DropdownItem'
