import { Paragraph, Spacer } from 'components'
import { FC, ReactNode } from 'react'

import { VisitedSectionComponent } from './TopBar.styles'

interface DropdownSectionProps {
	icon: ReactNode
	title: string
	children: ReactNode
	bottomSpace?: 'small' | 'medium'
}

export const DropdownSection: FC<DropdownSectionProps> = ({
	icon,
	title,
	children,
	bottomSpace = 'medium',
}) => (
	<VisitedSectionComponent>
		<Paragraph type="dropdown">
			{icon} {title.toUpperCase()}
		</Paragraph>

		<Spacer
			space="mini"
			type="vertical"
		/>

		{children}

		<Spacer
			space={bottomSpace}
			type="vertical"
		/>
	</VisitedSectionComponent>
)

export const DropdownText: FC<{ children: ReactNode }> = ({ children }) => (
	<Paragraph
		type="dropdown"
		align="left"
		size="s12"
	>
		{children}
	</Paragraph>
)
