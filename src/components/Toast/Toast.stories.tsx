import { ComponentMeta, ComponentStory } from '@storybook/react'

import { toastNotify } from '../../utils/toastNotify'
import { Button } from '../Button'

export default {
	title: 'Toast',
} as ComponentMeta<typeof Button>

const showToast = () => {
	toastNotify('Success toast!', 'success')
}

const Template: ComponentStory<typeof Button> = () => (
	<div>
		<Button
			variant="secondary"
			action={() => showToast()}
		>
			SHOW TOAST
		</Button>
	</div>
)

export const Default = Template.bind({})
Default.args = {}
