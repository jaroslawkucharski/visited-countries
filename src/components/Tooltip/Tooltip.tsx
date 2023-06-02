import { FC, ReactNode, useState } from 'react'
import { Arrow, useHover, useLayer } from 'react-laag'
import { useTheme } from 'styled-components'

import { TooltipComponent } from './Tooltip.styles'

export interface TooltipProps {
	children: ReactNode
	content: ReactNode
	showOnClick?: boolean
	isDisabled?: boolean
	'data-testid'?: string
}

export const Tooltip: FC<TooltipProps> = ({
	children,
	content,
	showOnClick,
	isDisabled,
	'data-testid': dataTestId = 'tooltip',
}) => {
	const theme = useTheme()

	const [isOpenOnHover, hoverProps] = useHover()
	const [isOpenOnClick, setOpenOnClick] = useState(false)

	const isOpen = showOnClick ? isOpenOnClick : isOpenOnHover

	const handleCloseTooltip = () => {
		setOpenOnClick(false)
	}

	const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
		isOpen,
		placement: 'top-center',
		triggerOffset: 8,
		onOutsideClick: handleCloseTooltip,
	})

	const stateProps = showOnClick ? { onClick: () => setOpenOnClick(prev => !prev) } : hoverProps

	return (
		<>
			{!isDisabled && (
				<span
					data-testid={dataTestId}
					{...triggerProps}
					{...stateProps}
				>
					{children}
				</span>
			)}

			{renderLayer(
				isOpen && (
					<TooltipComponent {...layerProps}>
						{content}

						<Arrow
							{...arrowProps}
							backgroundColor={theme.colors.secondary}
							size={6}
						/>
					</TooltipComponent>
				),
			)}
		</>
	)
}
