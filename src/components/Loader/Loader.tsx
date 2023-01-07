import { LoaderComponent } from './Loader.styles'

export const Loader = () => (
	<LoaderComponent>
		<div className="bounce1" />
		<div className="bounce2" />
		<div className="bounce3" />
	</LoaderComponent>
)

Loader.displayName = 'Loader'
