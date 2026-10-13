import { FC, ReactNode } from 'react'

import { IconBadgeComponent } from './TopBar.styles'

interface IconBadgeProps {
	icon: ReactNode
	count: number
	'data-testid'?: string
}

export const IconBadge: FC<IconBadgeProps> = ({ icon, count, 'data-testid': dataTestId }) => (
	<IconBadgeComponent data-testid={dataTestId}>
		{icon}

		{count > 0 && <span className="count">{count}</span>}
	</IconBadgeComponent>
)
