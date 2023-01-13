import { Paragraph } from 'components'
import { FormikErrors, FormikTouched } from 'formik'
import { ChangeEventHandler, FC, FocusEventHandler, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiEye, HiEyeOff } from 'react-icons/hi'

import { IconComponent, InputComponent, LabelComponent } from './Input.styles'

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
	const { t } = useTranslation()

	const [showPassword, setShowPassword] = useState(false)

	const isError = (errors[name] && touched[name]) as boolean
	const isPassword = (type === 'password') as boolean

	const handleShowPassword = () => setShowPassword(!showPassword)

	return (
		<div>
			<LabelComponent
				htmlFor={id}
				hasFullWidth={hasFullWidth}
			>
				<Paragraph
					type="label"
					data-testid="input-label"
				>
					{label}
				</Paragraph>

				{isError && (
					<Paragraph
						type="error"
						size="small"
						data-testid="input-error"
					>
						{t(`${errors[name]}`)}
					</Paragraph>
				)}
			</LabelComponent>

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
				data-testid="input"
			/>

			{isPassword && (
				<IconComponent
					onClick={handleShowPassword}
					data-testid="input-password"
				>
					{showPassword ? <HiEyeOff /> : <HiEye />}
				</IconComponent>
			)}
		</div>
	)
}

Input.displayName = 'Input'
