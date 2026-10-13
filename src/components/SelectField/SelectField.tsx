import { ChangeEvent, FC } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

import { SelectComponent, SelectFieldComponent, SelectWrapperComponent } from './SelectField.styles'

export interface SelectFieldOption {
	value: string
	label: string
}

export interface SelectFieldProps {
	label: string
	value: string
	options: SelectFieldOption[]
	onChange: (value: string) => void
	isDisabled?: boolean
	'data-testid'?: string
}

export const SelectField: FC<SelectFieldProps> = ({
	label,
	value,
	options,
	onChange,
	isDisabled = false,
	'data-testid': dataTestId = 'select-field',
}) => (
	<SelectFieldComponent>
		{label}

		<SelectWrapperComponent>
			<SelectComponent
				value={value}
				onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
				disabled={isDisabled}
				data-testid={dataTestId}
			>
				{options.map(option => (
					<option
						key={option.value}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</SelectComponent>

			<HiChevronDown
				className="icon"
				aria-hidden
			/>
		</SelectWrapperComponent>
	</SelectFieldComponent>
)

SelectField.displayName = 'SelectField'
