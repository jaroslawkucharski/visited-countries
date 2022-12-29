import { FormikErrors, FormikTouched } from 'formik'
import { ChangeEventHandler, FC, FocusEventHandler } from 'react'

import { InputComponent, LabelComponent } from './Input.styles'

interface InputProps {
	field?: {
		name: string
		value?: string | number
		onChange: ChangeEventHandler<HTMLInputElement>
		onBlur: FocusEventHandler<HTMLInputElement>
	}
	type?: 'text' | 'email' | 'password'
	label: string
	name: string
	id: string
	value?: string | number
	placeholder: string
	form: {
		touched?: FormikTouched<{
			[field: string]: any
		}>
		errors?: FormikErrors<{
			[field: string]: string
		}>
	}
	onChange?: ChangeEventHandler<HTMLInputElement>
	onBlur?: FocusEventHandler<HTMLInputElement>
	hasFullWidth?: boolean
}

export const Input: FC<InputProps> = ({
	field,
	type = 'text',
	label,
	name,
	placeholder,
	id,
	value = '',
	form: { touched, errors },
	onChange,
	onBlur,
	hasFullWidth = false,
}) => (
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
			touched={touched}
			errors={errors}
			{...field}
			hasFullWidth={hasFullWidth}
		/>

		{!!errors && <p>{errors[name]}</p>}
	</div>
)
