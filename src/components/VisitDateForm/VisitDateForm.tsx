import { ChangeEvent, FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
	FieldComponent,
	SelectFieldComponent,
	VisitDateFormComponent,
} from './VisitDateForm.styles'

export interface VisitDateFormProps {
	// called with "YYYY-MM", "YYYY" (whole year) or null (unknown date)
	onChange: (visitedAt: string | null) => void
	'data-testid'?: string
}

const FIRST_YEAR = 1950
const UNKNOWN = ''

export const toVisitedAt = (year: string, month: string) => {
	if (!year) return null

	return month ? `${year}-${month}` : year
}

export const VisitDateForm: FC<VisitDateFormProps> = ({
	onChange,
	'data-testid': dataTestId = 'visit-date-form',
}) => {
	const { t, i18n } = useTranslation()

	const now = new Date()
	const [year, setYear] = useState(String(now.getFullYear()))
	const [month, setMonth] = useState(String(now.getMonth() + 1).padStart(2, '0'))

	const years = Array.from({ length: now.getFullYear() - FIRST_YEAR + 1 }, (_, index) =>
		String(now.getFullYear() - index),
	)

	const monthFormatter = new Intl.DateTimeFormat(i18n.language, { month: 'long' })
	const months = Array.from({ length: 12 }, (_, index) => ({
		value: String(index + 1).padStart(2, '0'),
		label: monthFormatter.format(new Date(2000, index, 1)),
	}))

	const handleYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target

		setYear(value)
		onChange(toVisitedAt(value, month))
	}

	const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target

		setMonth(value)
		onChange(toVisitedAt(year, value))
	}

	return (
		<VisitDateFormComponent data-testid={dataTestId}>
			<FieldComponent>
				{t('visit.date.month')}

				<SelectFieldComponent
					value={month}
					onChange={handleMonthChange}
					disabled={year === UNKNOWN}
					data-testid="visit-date-month"
				>
					<option value={UNKNOWN}>{t('visit.date.any.month')}</option>

					{months.map(({ value, label }) => (
						<option
							key={value}
							value={value}
						>
							{label.charAt(0).toUpperCase() + label.slice(1)}
						</option>
					))}
				</SelectFieldComponent>
			</FieldComponent>

			<FieldComponent>
				{t('visit.date.year')}

				<SelectFieldComponent
					value={year}
					onChange={handleYearChange}
					data-testid="visit-date-year"
				>
					<option value={UNKNOWN}>{t('visit.date.unknown')}</option>

					{years.map(value => (
						<option
							key={value}
							value={value}
						>
							{value}
						</option>
					))}
				</SelectFieldComponent>
			</FieldComponent>
		</VisitDateFormComponent>
	)
}

VisitDateForm.displayName = 'VisitDateForm'
