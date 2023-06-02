import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Heading } from './Heading'

export default {
	title: 'Heading',
	component: Heading,
	argTypes: {
		level: {
			options: [1, 2],
			control: { type: 'radio' },
		},
		align: {
			options: ['left', 'center', 'right'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = args => (
	<Heading {...args}>{args?.children}</Heading>
)

const Default = Template.bind({})
Default.args = {
	align: 'left',
	'data-testid': 'heading',
}

export const H1 = Template.bind({})
H1.args = {
	children: 'Heading level 1',
	level: 1,
	...Default.args,
}

export const H2 = Template.bind({})
H2.args = {
	children: 'Heading level 2',
	level: 2,
	...Default.args,
}
