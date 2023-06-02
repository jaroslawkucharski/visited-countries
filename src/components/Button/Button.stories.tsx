import type { Meta, StoryObj } from '@storybook/react'
import { AiFillLike } from 'react-icons/ai'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		borderRadius: {
			control: {
				type: 'range',
				min: 0,
				max: 20,
				step: 1
			}
		}
	}
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		variant: 'primary',
		label: 'Button',
		type: 'button',
		onClick: () => console.log('Click!'),
		width: 'auto',
		hasFullWidth: false,
		borderRadius: 0,
		isLoading: false,
		isDisabled: false,
		'data-testid': 'button'
	}
}

export const PrimaryWithIcon: Story = {
	args: {
		variant: 'primary',
		label: 'Button',
		icon: <AiFillLike />,
		type: 'button',
		onClick: () => console.log('Click!'),
		width: 'auto',
		hasFullWidth: false,
		borderRadius: 0,
		isLoading: false,
		isDisabled: false,
		'data-testid': 'button'
	}
}

export const PrimaryOnlyIcon: Story = {
	args: {
		variant: 'icon',
		icon: <AiFillLike />,
		type: 'button',
		onClick: () => console.log('Click!'),
		borderRadius: 0,
		isLoading: false,
		isDisabled: false,
		'data-testid': 'button'
	}
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		label: 'Button',
		type: 'button',
		onClick: () => console.log('Click!'),
		width: 'auto',
		hasFullWidth: false,
		borderRadius: 0,
		isLoading: false,
		isDisabled: false,
		'data-testid': 'button'
	}
}
