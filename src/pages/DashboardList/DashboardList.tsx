import { Heading, Input, Spacer } from 'components'
import { useTranslation } from 'react-i18next'

import { ProfileColumnComponent } from './DashboardList.styles'

export const DashboardList = () => {
	const { t } = useTranslation()

	return (
		<ProfileColumnComponent>
			<Heading>{t('word.list')}</Heading>

			<Spacer type="vertical" />

			<Input
				label="Search"
				name="searcher"
				id="searcher"
				placeholder="Search country"
				onChange={() => null}
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
