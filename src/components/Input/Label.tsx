import { Paragraph } from 'components'
import { FormikErrors } from 'formik'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { LabelComponent } from './Input.styles'

interface LabelProps {
	label: string
	name: string
	id: string
	errors?: FormikErrors<{
		[field: string]: string
	}>
	isError: boolean
	hasFullWidth?: boolean
}

export const Label: FC<LabelProps> = ({
	label,
	name,
	id,
	errors = {},
	isError = false,
	hasFullWidth = false,
}) => {
	const { t } = useTranslation()

	return (
		<LabelComponent
			htmlFor={id}
			hasFullWidth={hasFullWidth}
		>
			<Paragraph type="label">{label}</Paragraph>

			{isError && (
				<Paragraph
					type="error"
					size="small"
				>
					{t(`${errors[name]}`)}
				</Paragraph>
			)}
		</LabelComponent>
	)
}

Label.displayName = 'InputLabel'
