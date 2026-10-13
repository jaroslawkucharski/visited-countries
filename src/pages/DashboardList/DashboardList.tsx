import { Layout, Spacer } from 'components'

import { ProfileColumnComponent } from './DashboardList.styles'
import { FavoriteCountries } from './Lists/FavoriteCountries'
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

			<FavoriteCountries />

			<UnvisitedCountries />
		</ProfileColumnComponent>
	</Layout>
)
