import { Button } from 'components'
import { auth } from 'config/firebase'
import { useTranslation } from 'react-i18next'

export const Profile = () => {
	const { t } = useTranslation()

	return (
		<>
			<p>{auth?.currentUser?.displayName}</p>

			<p>{auth?.currentUser?.email}</p>

			<Button action={() => null}>{t('word.logout')}</Button>
		</>
	)
}
