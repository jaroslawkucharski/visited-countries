import { Button } from 'components'
import { FC, ReactNode, useCallback, useRef, useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { useScrollDetector } from 'hooks/useScrollDetector'

import { DropdownComponent, DropdownMenuComponent } from './Dropdown.styles'

export interface DropdownProps {
	text: string
	children: ReactNode
	'data-testid'?: string
}

export const Dropdown: FC<DropdownProps> = ({
	text,
	children,
	'data-testid': dataTestId = 'dropdown',
}) => {
	const dropdownRef = useRef(null)

	const [isOpen, setOpen] = useState<boolean>(false)

	const handleOpenToogle = useCallback(() => setOpen(!isOpen), [isOpen])

	const handleClose = useCallback(() => setOpen(false), [])

	useOnClickOutside(dropdownRef, handleClose)

	useScrollDetector(handleClose)

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<DropdownComponent
			onClick={handleOpenToogle}
			ref={dropdownRef}
			data-testid={dataTestId}
		>
			<Button isDropdown={isOpen}>
				{isOpen ? <HiChevronUp /> : <HiChevronDown />}

				{text}
			</Button>
			{isOpen && <DropdownMenuComponent>{children}</DropdownMenuComponent>}
		</DropdownComponent>
	)
}

Dropdown.displayName = 'Dropdown'
