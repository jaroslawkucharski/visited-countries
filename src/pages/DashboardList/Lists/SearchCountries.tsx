import { Heading, Input, Spacer } from 'components'
import { ChangeEvent, FC } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMagnifyingGlassCircle, HiXCircle } from 'react-icons/hi2'

import { SearchComponent, SearchIconComponent } from '../DashboardList.styles'

interface SearchCountriesProps {
	query: string
	onChange: (query: string) => void
}

// Filters the visited, favorite and unvisited lists below
export const SearchCountries: FC<SearchCountriesProps> = ({ query, onChange }) => {
	const { t } = useTranslation()

	return (
		<>
			<Heading>{t('word.list')}</Heading>

			<Spacer type="vertical" />

			<SearchComponent>
				<Input
					id="countries-search"
					name="countries-search"
					placeholder={`${t('list.input.placeholder')}`}
					value={query}
					onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
					hasFullWidth
					hideError
					data-testid="countries-search"
				/>

				{query ? (
					<SearchIconComponent
						onClick={() => onChange('')}
						title={String(t('word.clear'))}
						data-testid="countries-search-clear"
					>
						<HiXCircle />
					</SearchIconComponent>
				) : (
					<SearchIconComponent as="span">
						<HiMagnifyingGlassCircle />
					</SearchIconComponent>
				)}
			</SearchComponent>
		</>
	)
}
