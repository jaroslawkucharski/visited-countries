import { FC } from 'react'

import { LoaderButtonComponent, LoaderComponent } from './Loader.styles'

export interface LoaderProps {
	type?: 'button' | 'website'
	'data-testid'?: string
}

export const Loader: FC<LoaderProps> = ({
	type = 'button',
	'data-testid': dataTestId = 'loader',
}) =>
	type === 'button' ? (
		<LoaderButtonComponent data-testid={dataTestId}>
			<div className="load1" />
			<div className="load2" />
			<div className="load3" />
		</LoaderButtonComponent>
	) : (
		<LoaderComponent data-testid={dataTestId} />
	)

Loader.displayName = 'Loader'
