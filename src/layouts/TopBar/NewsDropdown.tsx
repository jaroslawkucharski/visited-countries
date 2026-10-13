import { Dropdown, Paragraph, Spacer } from 'components'
import { useTranslation } from 'react-i18next'
import { TbBell, TbNews } from 'react-icons/tb'

import { useNews } from 'hooks/useNews'

import { LOCALES } from 'constants/locales'

import { IconBadgeComponent, NewsListComponent, VisitedSectionComponent } from './TopBar.styles'

export const NewsDropdown = () => {
	const { t, i18n } = useTranslation()
	const { unreadNews, markAsRead, markAllAsRead } = useNews()

	const newsLocale = i18n.language === LOCALES.EN ? 'en' : 'pl'

	return (
		<Dropdown
			label={
				<IconBadgeComponent data-testid="button-news">
					<TbBell />

					{unreadNews.length > 0 && <span className="count">{unreadNews.length}</span>}
				</IconBadgeComponent>
			}
			customButtonProps={{ variant: 'icon' }}
			hasChevron={false}
			dropdownWith={100}
			dropdownContentWith="340px"
		>
			<VisitedSectionComponent>
				<Paragraph type="dropdown">
					<TbNews /> {t('news.title').toUpperCase()}
				</Paragraph>

				<Spacer
					space="mini"
					type="vertical"
				/>

				{unreadNews.length === 0 ? (
					<Paragraph
						type="dropdown"
						align="left"
						size="s12"
					>
						{t('news.empty')}
					</Paragraph>
				) : (
					<>
						<Paragraph
							type="dropdown"
							align="left"
							size="s12"
						>
							{t('news.hint')}
						</Paragraph>

						<NewsListComponent data-testid="news-list">
							{unreadNews.map(entry => (
								<li key={entry.id}>
									<button
										type="button"
										onClick={event => {
											event.stopPropagation()
											markAsRead(entry.id)
										}}
										data-testid="news-entry"
									>
										<strong>{entry.title[newsLocale]}</strong>

										<span className="date">
											{new Date(entry.date).toLocaleDateString(i18n.language)}
										</span>

										<span>{entry.text[newsLocale]}</span>
									</button>
								</li>
							))}
						</NewsListComponent>

						<button
							type="button"
							className="mark-all"
							onClick={() => markAllAsRead(unreadNews.map(({ id }) => id))}
							data-testid="news-mark-all"
						>
							{t('news.mark.all')}
						</button>
					</>
				)}

				<Spacer type="vertical" />
			</VisitedSectionComponent>
		</Dropdown>
	)
}
