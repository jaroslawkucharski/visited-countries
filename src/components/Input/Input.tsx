import { FormikErrors, FormikTouched } from 'formik'
import { ChangeEventHandler, FC, FocusEventHandler, useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { IconComponent, InputComponent } from './Input.styles'
import { Label } from './Label'

interface InputProps {
	type?: 'text' | 'email' | 'password'
	label: string
	name: string
	id: string
	value?: string | number
	placeholder?: string
	touched?: FormikTouched<{
		[field: string]: boolean
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
	placeholder = '',
	id,
	value = '',
	touched = {},
	errors = {},
	onChange,
	onBlur,
	autoFocus = false,
	hasFullWidth = false,
}) => {
	const [showPassword, setShowPassword] = useState(false)

	const isError = (errors[name] && touched[name]) as boolean
	const isPassword = (type === 'password') as boolean

	const handleShowPassword = () => setShowPassword(!showPassword)

	return (
		<div>
			<Label
				id={id}
				name={name}
				label={label}
				errors={errors}
				isError={isError}
				hasFullWidth={hasFullWidth}
			/>

			<InputComponent
				id={id}
				name={name}
				type={showPassword ? 'text' : type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				hasFullWidth={hasFullWidth}
				autoFocus={autoFocus}
				isError={isError}
				isPassword={isPassword}
			/>

			{isPassword && (
				<IconComponent onClick={handleShowPassword}>
					{showPassword ? <HiEyeOff /> : <HiEye />}
				</IconComponent>
			)}
		</div>
	)
}

Input.displayName = 'Input'
