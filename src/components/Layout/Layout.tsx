import { FC, ReactNode } from 'react'

import { ChildrenComponent, LayoutComponent, PresentionalComponent } from './Layout.styles'

interface LayoutProps {
	children: ReactNode
	image?: string
	'data-testid'?: string
}

export const Layout: FC<LayoutProps> = ({
	children,
	image,
	'data-testid': dataTestId = 'layout',
}) => (
	<LayoutComponent data-testid={dataTestId}>
		<PresentionalComponent image={image} />

		<ChildrenComponent>{children}</ChildrenComponent>
	</LayoutComponent>
)

Layout.displayName = 'Layout'
