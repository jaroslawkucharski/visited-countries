import profile from 'assets/images/pages/profile.jpg'
import { Button, Heading, Layout, Spacer } from 'components'
import { auth } from 'config/firebase'
import { useTranslation } from 'react-i18next'
import { removeAccount } from 'services/user'
import { modalShow } from 'utils'

import { useWindowSize } from 'hooks/useWindowSize'

import { Form } from './Sections/Form'
import { Mobile } from './Sections/Mobile'
import { User } from './Sections/User'

export const Profile = () => {
	const { t } = useTranslation()
	const { isMobile } = useWindowSize()

	const showRemoveModal = () =>
		modalShow({
			id: 'remove-country',
			title: t('word.remove.account'),
			subtitle: auth?.currentUser?.email || '',
			content: t('modal.remove.account.content'),
			actionName: t('word.remove'),
			cancelName: t('word.cancel'),
			action: () => removeAccount(),
			variant: 'alert',
		})

	return (
		<Layout image={profile}>
			<Heading>{t('word.profile')}</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<User />

			<Form />

			<Spacer type="vertical" />

			<Button
				variant="secondary"
				action={showRemoveModal}
				hasFullWidth
			>
				{t('word.remove.account')}
			</Button>

			{isMobile && <Mobile />}
		</Layout>
	)
}
