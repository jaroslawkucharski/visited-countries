import { Paragraph, ProgressBar, Spacer } from 'components'
import { useCountriesListContext } from 'context/CountriesListContext'
import { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { TbMapPin, TbPlane } from 'react-icons/tb'

import { getMonthName, toMonthValue } from 'helpers/visitDate'

import { DropdownSection, DropdownText } from './DropdownSection'
import { MonthsComponent } from './TopBar.styles'

const StatRow: FC<{ label: ReactNode; value: ReactNode }> = ({ label, value }) => (
	<div className="quantity">
		<DropdownText>{label}</DropdownText>

		<DropdownText>{value}</DropdownText>
	</div>
)

const ScaleLabels: FC<{ start: ReactNode; end: ReactNode }> = ({ start, end }) => (
	<div className="quantity">
		{[start, <TbPlane key="plane" />, end].map(text => (
			<Paragraph
				key={String(text)}
				type="dropdown"
				size="s12"
			>
				{text}
			</Paragraph>
		))}
	</div>
)

export const StatsSection = () => {
	const { t, i18n } = useTranslation()
	const { countries, visitedList, visitedCountries } = useCountriesListContext()

	const visitedPercent = countries?.length
		? Math.round((1000 * visitedList.length) / countries.length) / 10
		: 0

	const currentYear = String(new Date().getFullYear())
	const visitedThisYear = visitedCountries.filter(({ visitedAt }) =>
		visitedAt?.startsWith(currentYear),
	)
	const monthsWithVisits = Array.from({ length: 12 }, (_, index) =>
		visitedThisYear.some(({ visitedAt }) => visitedAt === `${currentYear}-${toMonthValue(index)}`),
	)

	return (
		<DropdownSection
			icon={<TbMapPin />}
			title={String(t('stats.title'))}
			bottomSpace="small"
		>
			<StatRow
				label={t('stats.countries.visited.title')}
				value={t('stats.countries.visited.value', {
					visited: visitedList.length,
					countries: countries?.length || 0,
				})}
			/>

			<Spacer
				space="mini"
				type="vertical"
			/>

			<ProgressBar
				limit={countries?.length || 0}
				value={visitedList.length}
			/>

			<ScaleLabels
				start={`${visitedPercent}%`}
				end="100%"
			/>

			<Spacer
				space="small"
				type="vertical"
			/>

			<StatRow
				label={t('stats.this.year')}
				value={visitedThisYear.length}
			/>

			<Spacer
				space="mini"
				type="vertical"
			/>

			<MonthsComponent data-testid="months-bar">
				{monthsWithVisits.map((hasVisit, index) => (
					<span
						key={toMonthValue(index)}
						className={hasVisit ? 'month visited' : 'month'}
						title={getMonthName(index, i18n.language)}
					/>
				))}
			</MonthsComponent>

			<ScaleLabels
				start={getMonthName(0, i18n.language)}
				end={getMonthName(11, i18n.language)}
			/>
		</DropdownSection>
	)
}
