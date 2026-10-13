import { FC, ReactNode } from 'react'

import { IconBadgeComponent } from './IconBadge.styles'

interface IconBadgeProps {
	icon: ReactNode
	count: number
	placement?: 'corner' | 'outside'
	'data-testid'?: string
}

export const IconBadge: FC<IconBadgeProps> = ({
	icon,
	count,
	placement = 'corner',
	'data-testid': dataTestId,
}) => (
	<IconBadgeComponent
		placement={placement}
		data-testid={dataTestId}
	>
		{icon}

		{count > 0 && <span className="count">{count}</span>}
	</IconBadgeComponent>
)

IconBadge.displayName = 'IconBadge'
