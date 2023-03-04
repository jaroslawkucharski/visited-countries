import { Button, Image, Paragraph, Spacer, modalShow } from '@jaroslaw91/novelui'
import { Input } from 'components'
import { auth } from 'config/firebase'
import { ChangeEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiCloudArrowUp, HiTrash } from 'react-icons/hi2'
import { removeUserAvatar, setUserAvatar } from 'services/user'

import { FILE_SIZES } from 'constants/fileSizes'

import { ImageComponent, UserComponent } from './User.styles'

export const User = () => {
	const { t } = useTranslation()

	const { currentUser } = auth

	const [isError, setError] = useState(false)
	const [avatarImage, setAvatarImage] = useState(currentUser?.photoURL)
	const [isLoading, setLoading] = useState({ upload: false, remove: false })

	const inputRef = useRef(null)

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
			const size = Math.round(fileSize / FILE_SIZES.ONE_MB)

			if (size > FILE_SIZES.TWO_MB) {
				setError(true)
				setLoading(prev => ({ ...prev, upload: false }))

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

		setAvatarImage(null)

		setLoading(prev => ({ ...prev, remove: false }))
	}

	const showRemoveModal = () =>
		modalShow({
			id: 'remove-country',
			title: t('modal.remove.image'),
			content: t('modal.remove.image.content'),
			actionName: t('word.remove'),
			cancelName: t('word.cancel'),
			action: () => handleRemoveUserAvatar(),
			variant: 'alert',
		})

	return (
		<UserComponent>
			<Paragraph type="label">{t('word.image')}</Paragraph>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<ImageComponent>
				{avatarImage && (
					<Image
						src={avatarImage}
						alt={t('word.avatar')}
						variant="avatar"
						width={44}
						height={44}
					/>
				)}
				<Button
					action={handleUploadImage}
					isLoading={isLoading.upload}
					isDisabled={isLoading.upload}
					hasFullWidth
				>
					<HiCloudArrowUp />

					{t('word.upload')}
				</Button>

				<Button
					variant="secondary"
					action={showRemoveModal}
					hasOnlyIcon
					isLoading={isLoading.remove}
					isDisabled={isLoading.remove}
				>
					<HiTrash />
				</Button>
			</ImageComponent>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<Paragraph
				type="error"
				size="small"
			>
				{isError && t('errors.image')}
			</Paragraph>

			<Input
				id="file"
				type="file"
				name="file"
				ref={inputRef}
				onChange={handleUploadUserAvatar}
				accept="image/*"
				hideError
			/>
		</UserComponent>
	)
}
