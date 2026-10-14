import { FC } from 'react'

import { ProgressBarComponent } from './ProgressBar.styles'

interface ProgressBarProps {
	limit?: number
	value: number
}

export const ProgressBar: FC<ProgressBarProps> = ({ limit = 100, value }) => (
	<ProgressBarComponent
		limit={limit}
		value={value}
	>
		<div className="container">
			<div className="bar" />
		</div>
	</ProgressBarComponent>
)

ProgressBar.displayName = 'ProgressBar'
