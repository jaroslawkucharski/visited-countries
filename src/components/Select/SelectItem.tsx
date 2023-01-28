import { FC, ReactNode, useCallback } from 'react'

import { ItemComponent } from './Select.styles'

type ChildrenProps = {
	icon?: ReactNode
	name: string
}

export interface SelectItemProps {
	children: ChildrenProps
	action: (item: ChildrenProps) => void
	'data-testid'?: string
}

export const SelectItem: FC<SelectItemProps> = ({
	children,
	action,
	'data-testid': dataTestId = 'select-item',
}) => {
	const handleAction = useCallback(() => action(children), [action, children])

	return (
		<ItemComponent
			onClick={handleAction}
			data-testid={dataTestId}
		>
			<span>{children.icon}</span>

			<span>{children.name}</span>
		</ItemComponent>
	)
}
SelectItem.displayName = 'SelectItem'
