import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './Button'

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'alert'],
			control: { type: 'radio' },
		},
		align: {
			options: ['left', 'center'],
			control: { type: 'radio' },
		},
		type: {
			options: ['button', 'submit', 'reset'],
			control: { type: 'radio' },
		},
		action: { action: 'clicked' },
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args}>{args?.children}</Button>

const Default = Template.bind({})
Default.args = {
	type: 'button',
	hasFullWidth: false,
	hasOnlyIcon: false,
	align: 'center',
	isLoading: false,
	isDisabled: false,
	isDropdown: false,
	'data-testid': 'button',
}

export const Primary = Template.bind({})
Primary.args = {
	children: 'Button Primary',
	variant: 'primary',
	...Default.args,
}

export const Secondary = Template.bind({})
Secondary.args = {
	children: 'Button Secondary',
	variant: 'secondary',
	...Default.args,
}

export const Alert = Template.bind({})
Alert.args = {
	children: 'Button Alert',
	variant: 'alert',
	...Default.args,
}
