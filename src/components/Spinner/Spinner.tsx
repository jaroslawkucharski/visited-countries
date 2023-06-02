import { FC } from 'react'

// eslint-disable-next-line import/no-cycle
import { SpinnerComponent, SpinnerComponentWrapper } from './Spinner.styles'

export interface SpinnerProps {
	color?: string
	'data-testid'?: string
}

export const Spinner: FC<SpinnerProps> = ({ color, 'data-testid': dataTestId = 'spinner' }) => (
	<SpinnerComponentWrapper>
		<SpinnerComponent
			color={color}
			data-testid={dataTestId}
		/>
	</SpinnerComponentWrapper>
)

Spinner.displayName = 'novelUI/Components/Spinner'
