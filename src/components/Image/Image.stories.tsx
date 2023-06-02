import { ComponentMeta, ComponentStory } from '@storybook/react'

import image from '../../assets/images/login.jpg'
import { Image } from './Image'

export default {
	title: 'Image',
	component: Image,
	argTypes: {
		variant: {
			options: ['default', 'avatar'],
			control: { type: 'radio' },
		},
		onClick: { action: 'clicked' },
	},
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = args => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
	src: image,
	variant: 'default',
	width: 200,
	height: 'auto',
	alt: 'Image alt.',
	'data-testid': 'image',
}

export const Avatar = Template.bind({})
Avatar.args = {
	...Default.args,
	variant: 'avatar',
}
