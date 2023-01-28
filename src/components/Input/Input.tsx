import { Paragraph } from 'components'
import { FormikErrors, FormikTouched } from 'formik'
import { ChangeEventHandler, FC, FocusEventHandler, ReactEventHandler, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'

import {
	IconComponent,
	InputComponent,
	InputWrapperComponent,
	LabelComponent,
} from './Input.styles'
import { PasswordMeter } from './PasswordMeter'

interface InputProps {
	type?: 'text' | 'email' | 'password'
	label?: string
	name: string
	id: string
	value?: string
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
	hasPasswordMeter?: boolean
	isDropdown?: boolean
	hideError?: boolean
	onClick?: ReactEventHandler<HTMLInputElement>
	'data-testid'?: string
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
	hasPasswordMeter = false,
	isDropdown = false,
	hideError = false,
	onClick,
	'data-testid': dataTestId = 'input',
}) => {
	const { t } = useTranslation()

	const [showPassword, setShowPassword] = useState(false)

	const isError = (errors[name] && touched[name]) as boolean
	const isPassword = (type === 'password') as boolean

	const handleShowPassword = () => setShowPassword(!showPassword)

	return (
		<div>
			{label && (
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
				</LabelComponent>
			)}

			<InputWrapperComponent>
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
					data-testid={dataTestId}
					isDropdown={isDropdown}
					onClick={onClick}
				/>

				{isPassword && (
					<IconComponent
						onClick={handleShowPassword}
						data-testid="input-password"
					>
						{showPassword ? <HiEyeSlash /> : <HiEye />}
					</IconComponent>
				)}

				{isPassword && !isError && hasPasswordMeter && <PasswordMeter value={value} />}
			</InputWrapperComponent>

			{!hideError && (
				<Paragraph
					type="error"
					size="small"
					align="left"
					data-testid="input-error"
				>
					{isError ? t(`${errors[name]}`) : null}
				</Paragraph>
			)}
		</div>
	)
}

Input.displayName = 'Input'
