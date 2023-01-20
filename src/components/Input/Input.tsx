import { Paragraph } from 'components'
import { FormikErrors, FormikTouched } from 'formik'
import { ChangeEventHandler, FC, FocusEventHandler, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'

import {
	IconComponent,
	InputComponent,
	InputWrapperComponent,
	LabelComponent,
} from './Input.styles'

interface InputProps {
	type?: 'text' | 'email' | 'password'
	label: string
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
	const [progress, setProgress] = useState('0')

	const isError = (errors[name] && touched[name]) as boolean
	const isPassword = (type === 'password') as boolean

	const handleShowPassword = () => setShowPassword(!showPassword)

	type StrenchCheck = {
		length: number | boolean
		hasUpperCase: boolean
		hasLowerCase: boolean
		hasDigit: boolean
		hasSpecialChar: boolean
	}

	useEffect(() => {
		const strengthChecks: StrenchCheck = {
			length: 0,
			hasUpperCase: false,
			hasLowerCase: false,
			hasDigit: false,
			hasSpecialChar: false,
		}

		strengthChecks.length = value.length >= 8
		strengthChecks.hasUpperCase = /[A-Z]+/.test(value)
		strengthChecks.hasLowerCase = /[a-z]+/.test(value)
		strengthChecks.hasDigit = /[0-9]+/.test(value)
		strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(value)

		const verifiedList = Object.values(strengthChecks).filter(passportValue => passportValue)

		setProgress(`${(verifiedList.length / 5) * 100}%`)
	}, [value])

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
			</LabelComponent>

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
					data-testid="input"
				/>

				{isPassword && (
					<IconComponent
						onClick={handleShowPassword}
						data-testid="input-password"
					>
						{showPassword ? <HiEyeSlash /> : <HiEye />}
					</IconComponent>
				)}
			</InputWrapperComponent>

			<Paragraph
				type="error"
				size="small"
				align="left"
				data-testid="input-error"
			>
				{isError ? t(`${errors[name]}`) : null}
			</Paragraph>
		</div>
	)
}

Input.displayName = 'Input'
