import { Button } from 'components'
import { FC, MouseEventHandler, ReactNode, useCallback, useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

import { DropdownComponent, DropdownMenuComponent } from './Dropdown.styles'

export interface DropdownProps {
	text: string
	children: ReactNode
}

export const Dropdown: FC<DropdownProps> = ({ text, children }) => {
	const [isOpen, setOpen] = useState<boolean>(false)

	const handleOpen: MouseEventHandler<HTMLDivElement> = useCallback(
		() => setOpen(!isOpen),
		[isOpen],
	)

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<DropdownComponent onClick={handleOpen}>
			<Button isDropdown={isOpen}>
				{isOpen ? <HiChevronUp /> : <HiChevronDown />} {text}
			</Button>
			{isOpen ? <DropdownMenuComponent>{children}</DropdownMenuComponent> : null}
		</DropdownComponent>
	)
}

Dropdown.displayName = 'Dropdown'
