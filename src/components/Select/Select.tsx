import { Input } from 'components'
import { ChangeEvent, FC, ReactNode, useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiDocumentMagnifyingGlass, HiXCircle } from 'react-icons/hi2'
import { v4 as uuid } from 'uuid'

import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { useScrollDetector } from 'hooks/useScrollDetector'

import {
	EmptyListComponent,
	IconComponent,
	SelectComponent,
	SelectMenuComponent,
} from './Select.styles'
import { SelectItem } from './SelectItem'

type OptionsProps = {
	icon?: ReactNode
	name: string
}

export interface SelectProps {
	options: OptionsProps[]
	hasFullWidth?: boolean
	'data-testid'?: string
}

export const Select: FC<SelectProps> = ({
	options,
	hasFullWidth,
	'data-testid': dataTestId = 'select',
}) => {
	const selectRef = useRef(null)

	const { t } = useTranslation()

	const [isOpen, setOpen] = useState(false)
	const [selectOptions, setOptions] = useState(options)
	const [inputValue, setValue] = useState('')

	const handleOpenToogle = useCallback(() => setOpen(!isOpen), [isOpen])

	const handleClose = useCallback(() => setOpen(false), [])

	useOnClickOutside(selectRef, handleClose)

	useScrollDetector(handleClose)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target

		setValue(value)

		if (!value) {
			setOptions(options)
		} else {
			setOptions([])
		}

		options.filter(
			item => item.name.toLowerCase().includes(inputValue) && setOptions(prev => [...prev, item]),
		)
	}

	const handleSetOption = useCallback((item: OptionsProps) => {
		setValue(item.name)
	}, [])

	const handleClearValue = () => {
		setValue('')
		setOptions(options)
	}

	return (
		<SelectComponent
			onClick={handleOpenToogle}
			ref={selectRef}
			hasFullWidth={hasFullWidth}
			data-testid={dataTestId}
		>
			<Input
				id={uuid()}
				name="select-input"
				label={t('word.search')}
				placeholder={`${t('list.input.placeholder')}`}
				value={inputValue}
				onChange={handleChange}
				hasFullWidth
				isDropdown={isOpen}
				data-testid="select-input"
				hideError
			/>

			{isOpen && (
				<>
					<IconComponent
						onClick={handleClearValue}
						data-testid="select-icon"
					>
						<HiXCircle />
					</IconComponent>

					<SelectMenuComponent>
						{selectOptions.length ? (
							<ul>
								{selectOptions.map(item => (
									<li key={uuid()}>
										<SelectItem action={handleSetOption}>{item}</SelectItem>
									</li>
								))}
							</ul>
						) : (
							<EmptyListComponent data-testid="select-empty-message">
								<HiDocumentMagnifyingGlass />

								{t('word.empty.message')}
							</EmptyListComponent>
						)}
					</SelectMenuComponent>
				</>
			)}
		</SelectComponent>
	)
}

Select.displayName = 'Select'