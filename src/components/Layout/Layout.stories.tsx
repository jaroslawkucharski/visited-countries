import { ComponentMeta, ComponentStory } from '@storybook/react'

import login from '../../assets/images/login.jpg'
import { Layout } from './Layout'

export default {
	title: 'Layout',
	component: Layout,
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = args => <Layout {...args}>{args?.children}</Layout>

export const Default = Template.bind({})
Default.args = {
	children: 'I am Layout!',
	image: login,
	'data-testid': 'layout',
}
