import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '../Button'
import { Tooltip } from './Tooltip'

export default {
	title: 'Tooltip',
	component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => (
	<Tooltip {...args}>
		<Button>Tooltip</Button>
	</Tooltip>
)

export const Default = Template.bind({})
Default.args = {
	content: 'Tooltip',
}
