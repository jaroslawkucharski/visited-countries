import { Button } from 'components'
import { FC, ReactNode, useCallback, useRef, useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

import { useOnClickOutside } from 'hooks/useOnClickOutside'

import { DropdownComponent, DropdownMenuComponent } from './Dropdown.styles'

export interface DropdownProps {
	text: string
	children: ReactNode
}

export const Dropdown: FC<DropdownProps> = ({ text, children }) => {
	const dropdownRef = useRef(null)

	const [isOpen, setOpen] = useState<boolean>(false)

	const handleOpen = useCallback(() => setOpen(!isOpen), [isOpen])

	useOnClickOutside(dropdownRef, handleOpen)

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<DropdownComponent
			onClick={handleOpen}
			ref={dropdownRef}
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
