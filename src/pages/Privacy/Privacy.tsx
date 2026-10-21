import { passwordResetImage } from 'assets/images/pages'
import { Heading, Layout, Link, Paragraph, Spacer } from 'components'
import { useAuthContext } from 'context/AuthContext'
import { useTranslation } from 'react-i18next'

import { ROUTES } from 'constants/routes'

export const Privacy = () => {
	const { t } = useTranslation()
	const { userAuth } = useAuthContext()

	return (
		<Layout image={passwordResetImage}>
			<Heading>{t('privacy.title')}</Heading>

			<Paragraph size="s14">{t('privacy.updated')}</Paragraph>

			<Spacer
				space="big"
				type="vertical"
			/>

			<Paragraph
				size="s14"
				align="left"
			>
				{t('privacy.intro')}
			</Paragraph>

			<Spacer type="vertical" />

			<Heading
				level={2}
				align="left"
			>
				{t('privacy.data.title')}
			</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Paragraph
				size="s14"
				align="left"
			>
				{t('privacy.data.items')}
			</Paragraph>

			<Spacer type="vertical" />

			<Heading
				level={2}
				align="left"
			>
				{t('privacy.storage.title')}
			</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Paragraph
				size="s14"
				align="left"
			>
				{t('privacy.storage.items')}
			</Paragraph>

			<Spacer type="vertical" />

			<Heading
				level={2}
				align="left"
			>
				{t('privacy.use.title')}
			</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Paragraph
				size="s14"
				align="left"
			>
				{t('privacy.use.items')}
			</Paragraph>

			<Spacer type="vertical" />

			<Heading
				level={2}
				align="left"
			>
				{t('privacy.rights.title')}
			</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Paragraph
				size="s14"
				align="left"
			>
				{t('privacy.rights.items')}
			</Paragraph>

			<Spacer type="vertical" />

			<Heading
				level={2}
				align="left"
			>
				{t('privacy.cookies.title')}
			</Heading>

			<Spacer
				type="vertical"
				space="small"
			/>

			<Paragraph
				size="s14"
				align="left"
			>
				{t('privacy.cookies.description')}
			</Paragraph>

			<Spacer type="vertical" />

			<Spacer
				type="vertical"
				space="small"
			/>

			<Paragraph
				size="s14"
				align="left"
			>
				{t('privacy.contact.prefix')}{' '}
				<Link
					to={`mailto:${t('help.email')}?subject=${encodeURIComponent(
						String(t('help.subject')),
					)}&body=${encodeURIComponent(String(t('help.body')))}`}
				>
					{t('privacy.contact.link')}
				</Link>
			</Paragraph>

			<Spacer
				type="vertical"
				space="large"
			/>

			{!userAuth && <Link to={ROUTES.SIGNUP}>{t('word.signup')}</Link>}
		</Layout>
	)
}
