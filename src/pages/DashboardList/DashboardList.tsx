import { Layout, Spacer } from 'components'

import { ProfileColumnComponent } from './DashboardList.styles'
import { SelectCountries } from './Lists/SelectCountries'
import { UnvisitedCountries } from './Lists/UnvisitedCountries'
import { VisitedCountries } from './Lists/VisitedCountries'

export const DashboardList = () => (
	<Layout>
		<ProfileColumnComponent>
			<SelectCountries />

			<Spacer type="vertical" />

			<VisitedCountries />

			<Spacer type="vertical" />

			<UnvisitedCountries />
		</ProfileColumnComponent>
	</Layout>
)
