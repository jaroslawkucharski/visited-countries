import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { currentVisitedAt, getMonthName, toMonthValue, toVisitedAt } from 'helpers/visitDate'

import { SelectField } from '../SelectField'
import { VisitDateFormComponent } from './VisitDateForm.styles'

export interface VisitDateFormProps {
	initialValue?: string | null
	onChange: (visitedAt: string | null) => void
	'data-testid'?: string
}

const FIRST_YEAR = 1950
const UNKNOWN = ''

export const VisitDateForm: FC<VisitDateFormProps> = ({
	initialValue,
	onChange,
	'data-testid': dataTestId = 'visit-date-form',
}) => {
	const { t, i18n } = useTranslation()

	const [initialYear = UNKNOWN, initialMonth = UNKNOWN] = (
		initialValue === undefined ? currentVisitedAt() : initialValue || ''
	).split('-')
	const [year, setYear] = useState(initialYear)
	const [month, setMonth] = useState(initialMonth)

	const currentYear = new Date().getFullYear()

	const yearOptions = [
		{ value: UNKNOWN, label: String(t('visit.date.unknown')) },
		...Array.from({ length: currentYear - FIRST_YEAR + 1 }, (_, index) => {
			const value = String(currentYear - index)

			return { value, label: value }
		}),
	]

	const monthOptions = [
		{ value: UNKNOWN, label: String(t('visit.date.any.month')) },
		...Array.from({ length: 12 }, (_, index) => ({
			value: toMonthValue(index),
			label: getMonthName(index, i18n.language),
		})),
	]

	const handleYearChange = (value: string) => {
		setYear(value)
		onChange(toVisitedAt(value, month))
	}

	const handleMonthChange = (value: string) => {
		setMonth(value)
		onChange(toVisitedAt(year, value))
	}

	return (
		<VisitDateFormComponent data-testid={dataTestId}>
			<SelectField
				label={String(t('visit.date.month'))}
				value={month}
				options={monthOptions}
				onChange={handleMonthChange}
				isDisabled={year === UNKNOWN}
				data-testid="visit-date-month"
			/>

			<SelectField
				label={String(t('visit.date.year'))}
				value={year}
				options={yearOptions}
				onChange={handleYearChange}
				data-testid="visit-date-year"
			/>
		</VisitDateFormComponent>
	)
}

VisitDateForm.displayName = 'VisitDateForm'
