import { Button, Image, Paragraph, Spacer, modalShow } from '@jaroslaw91/novelui'
import { Input } from 'components'
import { auth } from 'config/firebase'
import { useCountriesListContext } from 'context/CountriesListContext'
import { ChangeEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiCloudArrowUp, HiTrash, HiUserCircle } from 'react-icons/hi2'
import { removeUserAvatar, setUserAvatar } from 'services/user'

import { FILE_SIZES } from 'constants/fileSizes'

import { ImageComponent, UserComponent } from './User.styles'

export const User = () => {
	const { t } = useTranslation()

	const { currentUser } = auth

	const [isError, setError] = useState(false)
	const [avatarImage, setAvatarImage] = useState(currentUser?.photoURL)
	const [isLoading, setLoading] = useState(false)

	const inputRef = useRef(null)

	const { visitedList } = useCountriesListContext()

	const handleUploadImage = () => {
		if (inputRef.current !== null) {
			const ref = inputRef?.current as HTMLInputElement

			ref.click()
		}
	}

	const handleUploadUserAvatar = async (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.currentTarget as HTMLInputElement

		if (target.files !== null) {
			setLoading(true)

			const file = target.files[0]
			const fileSize = file.size
			const size = Math.round(fileSize / FILE_SIZES.ONE_MB)

			if (size > FILE_SIZES.TWO_MB) {
				setError(true)
				setLoading(false)

				return
			}

			setError(false)

			await setUserAvatar(file)

			const reader = new FileReader()

			reader.onload = () => {
				setAvatarImage(reader.result as string)
			}

			reader.readAsDataURL(file)

			setLoading(false)
		}
	}

	const handleRemoveUserAvatar = async () => {
		await removeUserAvatar()

		setAvatarImage(null)
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
			<ImageComponent>
				{avatarImage ? (
					<Image
						src={avatarImage}
						alt={t('word.avatar')}
						variant="avatar"
						width={100}
						height={100}
					/>
				) : (
					<HiUserCircle className="empty-avatar" />
				)}

				<Spacer
					type="horizontal"
					space="tiny"
				/>

				<Paragraph
					size="big"
					align="right"
				>
					{t('word.visited')}
				</Paragraph>

				<Spacer
					type="horizontal"
					space="tiny"
				/>

				<Paragraph
					size="large"
					align="center"
				>
					{visitedList.length}
				</Paragraph>
			</ImageComponent>

			<Spacer type="vertical" />

			<Paragraph type="label">{t('word.image')}</Paragraph>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<ImageComponent>
				<Button
					action={handleUploadImage}
					isLoading={isLoading}
					isDisabled={isLoading}
					hasFullWidth
				>
					<HiCloudArrowUp />

					{t('word.upload')}
				</Button>

				{avatarImage && (
					<>
						<Spacer
							type="horizontal"
							space="tiny"
						/>

						<Button
							variant="secondary"
							action={showRemoveModal}
							hasOnlyIcon
						>
							<HiTrash />
						</Button>
					</>
				)}
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
