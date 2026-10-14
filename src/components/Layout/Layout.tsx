import type { ResponsiveImage } from 'assets/images/pages'
import { FC, ReactNode } from 'react'

import { ChildrenComponent, LayoutComponent, PresentionalComponent } from './Layout.styles'

export interface LayoutProps {
	children: ReactNode
	image?: ResponsiveImage
	'data-testid'?: string
}

export const Layout: FC<LayoutProps> = ({
	children,
	image,
	'data-testid': dataTestId = 'layout',
}) => {
	return (
		<LayoutComponent
			image={image}
			data-testid={dataTestId}
		>
			<PresentionalComponent image={image} />

			<ChildrenComponent>{children}</ChildrenComponent>
		</LayoutComponent>
	)
}

Layout.displayName = 'Layout'
