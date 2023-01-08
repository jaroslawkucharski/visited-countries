import { FC } from 'react'

import { LoaderButtonComponent, LoaderComponent } from './Loader.styles'

interface LoaderProps {
	type?: 'button' | 'website'
}

export const Loader: FC<LoaderProps> = ({ type = 'button' }) =>
	type === 'button' ? (
		<LoaderButtonComponent>
			<div className="load1" />
			<div className="load2" />
			<div className="load3" />
		</LoaderButtonComponent>
	) : (
		<LoaderComponent />
	)

Loader.displayName = 'Loader'
