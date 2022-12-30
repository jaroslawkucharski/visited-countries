import { FormikErrors, FormikTouched } from 'formik'
import { ChangeEventHandler, FC, FocusEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

import { ErrorComponent, InputComponent, LabelComponent } from './Input.styles'

interface InputProps {
	type?: 'text' | 'email' | 'password'
	label: string
	name: string
	id: string
	value?: string | number
	placeholder: string
	touched?: FormikTouched<{
		[field: string]: any
	}>
	errors?: FormikErrors<{
		[field: string]: string
	}>
	onChange?: ChangeEventHandler<HTMLInputElement>
	onBlur?: FocusEventHandler<HTMLInputElement>
	autoFocus?: boolean
	hasFullWidth?: boolean
}

export const Input: FC<InputProps> = ({
	type = 'text',
	label,
	name,
	placeholder,
	id,
	value = '',
	touched = {},
	errors = {},
	onChange,
	onBlur,
	autoFocus = false,
	hasFullWidth = false,
}) => {
	const { t } = useTranslation()

	const isError = (errors[name] && touched[name]) as boolean

	return (
		<div>
			<LabelComponent
				htmlFor={id}
				hasFullWidth={hasFullWidth}
			>
				{label}
			</LabelComponent>

			<br />

			<InputComponent
				id={id}
				name={name}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				hasFullWidth={hasFullWidth}
				autoFocus={autoFocus}
				isError={isError}
			/>

			{isError && <ErrorComponent>{t(`${errors[name]}`)}</ErrorComponent>}
		</div>
	)
}
