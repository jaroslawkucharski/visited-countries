import { Paragraph } from 'components'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiInformationCircle } from 'react-icons/hi2'

import { PasswordMeterComponent } from './Input.styles'

interface PasswordMeterProps {
	value?: string
}

type StrenchCheck = {
	length: number | boolean
	hasUpperCase: boolean
	hasLowerCase: boolean
	hasDigit: boolean
	hasSpecialChar: boolean
}

type StrengthTypes = {
	[key: number]: string
}

export const PasswordMeter: FC<PasswordMeterProps> = ({ value = '' }) => {
	const { t } = useTranslation()

	const [strength, setStrength] = useState(0)

	const strengthLevel: StrengthTypes = {
		20: 'word.very.weak',
		40: 'word.weak',
		60: 'word.medium',
		80: 'word.good',
		100: 'word.very.good',
	}

	const strengthColor: StrengthTypes = {
		20: 'error',
		40: 'weak',
		60: 'warning',
		80: 'good',
		100: 'success',
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

		setStrength((verifiedList.length / 5) * 100)
	}, [value])

	return (
		<PasswordMeterComponent
			strength={strength}
			color={strengthColor[strength]}
		>
			<div className="strength">
				<div className="very-weak" />

				<div className="weak" />

				<div className="medium" />

				<div className="good" />

				<div className="very-good" />
			</div>

			{!!strengthLevel[strength] && (
				<Paragraph
					size="small"
					data-testid="input-error"
				>
					{t(strengthLevel[strength])}

					<HiInformationCircle />
				</Paragraph>
			)}
		</PasswordMeterComponent>
	)
}

PasswordMeter.displayName = 'PasswordMeter'
