import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Break } from './Break'

export default {
	title: 'Break',
	component: Break,
} as ComponentMeta<typeof Break>

const Template: ComponentStory<typeof Break> = args => <Break {...args} />

export const Default = Template.bind({})
Default.args = {
	width: '100%',
	'data-testid': 'break',
}
