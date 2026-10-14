import { Break, Dropdown, DropdownItem, Image } from 'components'
import { auth } from 'config/firebase'
import { useTranslation } from 'react-i18next'
import { TbEdit, TbLogout, TbUser } from 'react-icons/tb'

import { useLogout } from 'hooks/useLogout'
import { useUserAvatar } from 'hooks/useUserAvatar'

import { ROUTES } from 'constants/routes'

import { StatsSection } from './StatsSection'

export const AccountDropdown = () => {
	const { t } = useTranslation()
	const avatar = useUserAvatar()
	const handleLogout = useLogout()

	return (
		<Dropdown
			label={
				<>
					{avatar ? (
						<Image
							src={avatar}
							alt={t('word.avatar')}
							variant="avatar"
							width={18}
							height={18}
						/>
					) : (
						<TbUser />
					)}

					{auth?.currentUser?.displayName || t('word.account')}
				</>
			}
		>
			<StatsSection />

			<Break />

			<DropdownItem to={ROUTES.PROFILE}>
				<TbEdit />

				{t('word.profile')}
			</DropdownItem>

			<Break />

			<DropdownItem action={handleLogout}>
				<TbLogout />

				{t('word.logout')}
			</DropdownItem>
		</Dropdown>
	)
}
