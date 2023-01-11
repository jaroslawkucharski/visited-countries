/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import en from 'assets/images/locales/en.svg'
import pl from 'assets/images/locales/pl.svg'
import { Button, Image, Spacer } from 'components'
import { auth } from 'config/firebase'
import { useAuthContext } from 'context/AuthContext'
import { useThemeColorContext } from 'context/ThemeContext'
import { ChangeEvent, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { HiMoon, HiSun } from 'react-icons/hi'

import { LOCALES } from 'constants/locales'

import { ProfileColumnComponent, SettingsComponent } from './Profile.styles'

export const Profile = () => {
	const { t, i18n } = useTranslation()
	const { setUserAvatar, logout } = useAuthContext()
	const { theme, toggleTheme } = useThemeColorContext()
	const inputRef = useRef(null)

	const handleLogout = useCallback(() => logout(), [logout])

	const handleUploadImage = () => {
		if (inputRef.current !== null) {
			const ref = inputRef?.current as HTMLInputElement

			ref.click()
		}
	}

	const handleUploadUserAvatar = (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.currentTarget as HTMLInputElement

		if (target.files !== null) {
			setUserAvatar(target.files[0])
		}
	}
	const handleLanguageChangeToPL = useCallback(
		() =>
			i18n.language === LOCALES.EN
				? i18n.changeLanguage(LOCALES.PL)
				: i18n.changeLanguage(LOCALES.EN),
		[i18n],
	)
	const handleThemeColorChange = useCallback(() => toggleTheme(), [toggleTheme])

	return (
		<ProfileColumnComponent>
			<div onClick={handleUploadImage}>
				<Image
					src={auth?.currentUser?.photoURL || ''}
					alt={t('word.avatar')}
					variant="avatar"
				/>
			</div>

			<input
				style={{ display: 'none' }}
				type="file"
				name="file"
				ref={inputRef}
				onChange={handleUploadUserAvatar}
				accept="image/*"
			/>

			<Spacer type="vertical" />

			<p>{auth?.currentUser?.displayName}</p>

			<Spacer
				type="vertical"
				space="tiny"
			/>

			<p>{auth?.currentUser?.email}</p>

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

			<Spacer
				type="vertical"
				space="big"
			/>

			<Button action={handleLogout}>{t('word.logout')}</Button>
		</ProfileColumnComponent>
	)
}
