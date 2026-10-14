import { Paragraph, Spacer } from 'components'
import { FC, ReactNode } from 'react'

interface CountriesSectionProps {
	title: string
	children: ReactNode
	'data-testid'?: string
}

export const CountriesSection: FC<CountriesSectionProps> = ({
	title,
	children,
	'data-testid': dataTestId,
}) => (
	<>
		<Paragraph size="big">{title}</Paragraph>

		<Spacer
			type="vertical"
			space="tiny"
		/>

		<ul data-testid={dataTestId}>{children}</ul>

		<Spacer type="vertical" />
	</>
)
