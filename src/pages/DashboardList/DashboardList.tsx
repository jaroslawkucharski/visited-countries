import { Input, Spacer } from 'components'

import { ProfileColumnComponent } from './DashboardList.styles'

export const DashboardList = () => {
	return (
		<ProfileColumnComponent>
			<Input
				label="Search"
				name="searcher"
				id="searcher"
				placeholder="Search country"
			/>

			<Spacer type="vertical" />

			<ul>
				<li>Poland</li>
				<li>USA</li>
				<li>Sweden</li>
			</ul>
		</ProfileColumnComponent>
	)
}
