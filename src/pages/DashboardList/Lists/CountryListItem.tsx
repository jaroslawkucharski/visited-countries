import { CountriesListType } from 'context/CountriesListContext'
import { FC, ReactNode } from 'react'

import { languageDetector } from 'helpers/languageDetector'

import { ActionsComponent, ListItemComponent } from '../DashboardList.styles'

interface CountryListItemProps {
	country?: CountriesListType
	children: ReactNode
}

export const CountryListItem: FC<CountryListItemProps> = ({ country, children }) => (
	<ListItemComponent>
		<span className="name">
			{`${country?.icon} ${languageDetector(country?.nameEN, country?.namePL)}`}
		</span>

		<ActionsComponent>{children}</ActionsComponent>
	</ListItemComponent>
)
