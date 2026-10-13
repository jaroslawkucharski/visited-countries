import LogoDark from 'assets/images/logo_dark.svg'
import LogoLight from 'assets/images/logo_light.svg'
import { Button, Image, Link } from 'components'
import { useAuthContext } from 'context/AuthContext'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { TbHelp } from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'
import { showHelpModal } from 'utils'

import { hideLogo } from 'helpers/hideLogo'

import { usePreferences } from 'hooks/usePreferences'
import { useWindowSize } from 'hooks/useWindowSize'

import { ROUTES } from 'constants/routes'

import { AccountDropdown } from './AccountDropdown'
import { FavoritesDropdown } from './FavoritesDropdown'
import { NewsDropdown } from './NewsDropdown'
import { SettingsComponent, TopBarComponent } from './TopBar.styles'

export const TopBar = () => {
	const { t } = useTranslation()

	const { isDark } = usePreferences()
	const { userAuth } = useAuthContext()

	const navigate = useNavigate()
	const { pathname } = useLocation()

	const { isMobile } = useWindowSize()

	const handleSignIn = useCallback(() => navigate(ROUTES.SIGNIN), [navigate])

	const handleSignUp = useCallback(() => navigate(ROUTES.SIGNUP), [navigate])

	return hideLogo(pathname) && isMobile ? null : (
		<TopBarComponent>
			<Link to={ROUTES.DASHBOARD}>
				<Image
					src={isDark ? LogoDark : LogoLight}
					width={250}
					alt={t('word.logo')}
				/>
			</Link>

			{!userAuth && !isMobile && (
				<SettingsComponent>
					<Button
						variant="primary"
						onClick={handleSignIn}
						data-testid="button-signin"
					>
						{t('word.signin')}
					</Button>

					<Button
						variant="secondary"
						onClick={handleSignUp}
						data-testid="button-signup"
					>
						{t('word.signup')}
					</Button>
				</SettingsComponent>
			)}

			{userAuth && !isMobile && (
				<SettingsComponent>
					<Button
						variant="icon"
						onClick={showHelpModal}
						aria-label={String(t('word.help'))}
						data-testid="button-help"
					>
						<TbHelp />
					</Button>

					<FavoritesDropdown />

					<NewsDropdown />

					<AccountDropdown />
				</SettingsComponent>
			)}
		</TopBarComponent>
	)
}
