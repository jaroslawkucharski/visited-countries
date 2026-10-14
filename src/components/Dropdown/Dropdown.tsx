import { Button } from 'components'
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'

import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { useScrollDetector } from 'hooks/useScrollDetector'

import { DropdownComponent, DropdownMenuComponent } from './Dropdown.styles'

export interface DropdownProps {
	label: ReactNode
	children: ReactNode
	customButtonProps?: object
	hasChevron?: boolean
	dropdownWith?: number | string
	dropdownContentWith?: number | string
	ariaLabel?: string
	'data-testid'?: string
}

export const Dropdown: FC<DropdownProps> = ({
	label,
	children,
	customButtonProps = { hasFullWidth: true },
	hasChevron = true,
	dropdownWith,
	dropdownContentWith,
	ariaLabel,
	'data-testid': dataTestId = 'dropdown',
}) => {
	const dropdownRef = useRef<HTMLDivElement>(null)
	const [isOpen, setOpen] = useState<boolean>(false)

	const handleOpenToggle = useCallback(() => setOpen(!isOpen), [isOpen])
	const handleClose = useCallback(() => setOpen(false), [])

	useOnClickOutside(dropdownRef, handleClose)
	useScrollDetector(handleClose)

	useEffect(() => {
		if (!isOpen) return undefined

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key !== 'Escape') return

			setOpen(false)
			dropdownRef.current?.querySelector<HTMLButtonElement>('button')?.focus()
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [isOpen])

	const renderChevron = isOpen ? <HiChevronUp /> : <HiChevronDown />

	const buttonContent = (
		<>
			{label}

			{hasChevron ? renderChevron : null}
		</>
	)

	return (
		<DropdownComponent
			onClick={handleOpenToggle}
			ref={dropdownRef}
			data-testid={dataTestId}
			dropdownWith={dropdownWith}
		>
			<Button
				{...customButtonProps}
				aria-label={ariaLabel}
				aria-expanded={isOpen}
			>
				{buttonContent}
			</Button>

			{isOpen && (
				<DropdownMenuComponent dropdownContentWith={dropdownContentWith}>
					{children}
				</DropdownMenuComponent>
			)}
		</DropdownComponent>
	)
}

Dropdown.displayName = 'Dropdown'
