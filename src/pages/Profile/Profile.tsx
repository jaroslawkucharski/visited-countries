import {
	Break,
	Button,
	Heading,
	Image,
	Layout,
	Paragraph,
	Spacer,
	modalShow,
} from '@jaroslaw91/novelui'
import avatar from 'assets/images/avatar/empty.png'
import en from 'assets/images/locales/en.svg'
import pl from 'assets/images/locales/pl.svg'
import { Input } from 'components'
import { auth } from 'config/firebase'
import { useThemeColorContext } from 'context/ThemeContext'
import { ChangeEvent, useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiCloudArrowUp, HiMoon, HiSun, HiTrash } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import { logout } from 'services/auth'
import { removeAccount, removeUserAvatar, setUserAvatar } from 'services/user'

import { useService } from 'hooks/useService'
import { useWindowSize } from 'hooks/useWindowSize'

import { LOCALES } from 'constants/locales'
import { ROUTES } from 'constants/routes'

import { Form } from './Form'
import { ImageComponent, SettingsComponent } from './Profile.styles'

export const Profile = () => {
	const { t, i18n } = useTranslation()
	const navigate = useNavigate()
	const { isMobile } = useWindowSize()

	const [isError, setError] = useState(false)
	const [avatarImage, setAvatarImage] = useState(auth?.currentUser?.photoURL || avatar)
	const [isLoading, setLoading] = useState({ upload: false, remove: false })

	const { theme, toggleTheme } = useThemeColorContext()
	const inputRef = useRef(null)

	const { request } = useService({
		service: logout,
		successCallback: () => navigate(ROUTES.SIGNIN),
	})

	const handleLogout = () => request()

	const handleUploadImage = () => {
		if (inputRef.current !== null) {
			const ref = inputRef?.current as HTMLInputElement

			ref.click()
		}
	}

	const handleUploadUserAvatar = async (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.currentTarget as HTMLInputElement

		if (target.files !== null) {
			setLoading(prev => ({ ...prev, upload: true }))

			const file = target.files[0]
			const fileSize = file.size
			const size = Math.round(fileSize / 1024)

			if (size > 2048) {
				setError(true)

				return
			}

			setError(false)

			await setUserAvatar(file)

			const reader = new FileReader()

			reader.onload = () => {
				setAvatarImage(reader.result as string)
			}

			reader.readAsDataURL(file)

			setLoading(prev => ({ ...prev, upload: false }))
		}
	}

	const handleRemoveUserAvatar = async () => {
		setLoading(prev => ({ ...prev, remove: true }))

		await removeUserAvatar()

		setAvatarImage(avatar)

		setLoading(prev => ({ ...prev, remove: false }))
	}

	const showRemoveModal = () =>
		modalShow({
			id: 'remove-country',
			title: t('modal.remove.country'),
			content: <>{t('modal.remove.country.content')}</>,
			actionName: t('word.remove'),
			cancelName: t('word.cancel'),
			action: () => removeAccount(),
			variant: 'alert',
		})

	const handleLanguageChangeToPL = useCallback(
		() =>
			i18n.language === LOCALES.EN
				? i18n.changeLanguage(LOCALES.PL)
				: i18n.changeLanguage(LOCALES.EN),
		[i18n],
	)
	const handleThemeColorChange = useCallback(() => toggleTheme(), [toggleTheme])

	return (
		<Layout>
			<Heading>{t('word.profile')}</Heading>

			<Spacer type="vertical" />

			<Image
				src={avatarImage}
				alt={t('word.avatar')}
				variant="avatar"
			/>

			<Spacer type="vertical" />

			<Paragraph type="label">{t('word.image')}</Paragraph>

			<Spacer type="vertical" />

			<ImageComponent>
				<Button
					action={handleUploadImage}
					isLoading={isLoading.upload}
					isDisabled={isLoading.upload}
				>
					<HiCloudArrowUp />

					{t('word.upload')}
				</Button>

				<Button
					variant="alert"
					action={handleRemoveUserAvatar}
					hasOnlyIcon
					isLoading={isLoading.remove}
					isDisabled={isLoading.remove}
				>
					<HiTrash />
				</Button>
			</ImageComponent>

			{isError && (
				<>
					<Spacer
						type="vertical"
						space="tiny"
					/>

					<Paragraph
						type="error"
						size="small"
					>
						{t('errors.image')}
					</Paragraph>
				</>
			)}

			<Input
				id="file"
				type="file"
				name="file"
				ref={inputRef}
				onChange={handleUploadUserAvatar}
				accept="image/*"
			/>

			<Spacer type="vertical" />

			<Break />

			<Spacer
				type="vertical"
				space="big"
			/>

			<Form />

			{isMobile && (
				<>
					<Spacer
						type="vertical"
						space="big"
					/>

					<Break />

					<Spacer
						type="vertical"
						space="big"
					/>
					<SettingsComponent>
						<Button
							variant="secondary"
							action={handleThemeColorChange}
							hasOnlyIcon
						>
							{theme === 'dark' ? <HiSun /> : <HiMoon />}
						</Button>

						<Button
							variant="secondary"
							action={handleLanguageChangeToPL}
							hasOnlyIcon
						>
							{i18n.language === LOCALES.EN ? (
								<Image
									src={en}
									width={16}
									alt="en"
								/>
							) : (
								<Image
									src={pl}
									width={16}
									alt="pl"
								/>
							)}
						</Button>
					</SettingsComponent>

					<Spacer type="vertical" />

					<Button
						action={handleLogout}
						hasFullWidth
					>
						{t('word.logout')}
					</Button>
				</>
			)}

			<Spacer type="vertical" />

			<Button
				variant="alert"
				action={showRemoveModal}
				hasFullWidth
			>
				Remove
			</Button>
		</Layout>
	)
}
