import { Dropdown } from 'components'
import { useTranslation } from 'react-i18next'
import { TbBell, TbNews } from 'react-icons/tb'

import { languageDetector } from 'helpers/languageDetector'

import { useNews } from 'hooks/useNews'

import { DropdownSection, DropdownText } from './DropdownSection'
import { IconBadge } from './IconBadge'
import { NewsListComponent } from './TopBar.styles'

export const NewsDropdown = () => {
	const { t, i18n } = useTranslation()
	const { unreadNews, markAsRead, markAllAsRead } = useNews()

	return (
		<Dropdown
			label={
				<IconBadge
					icon={<TbBell />}
					count={unreadNews.length}
					data-testid="button-news"
				/>
			}
			customButtonProps={{ variant: 'icon' }}
			hasChevron={false}
			ariaLabel={`${t('news.title')}${unreadNews.length ? ` (${unreadNews.length})` : ''}`}
			dropdownWith={100}
			dropdownContentWith="340px"
		>
			<DropdownSection
				icon={<TbNews />}
				title={String(t('news.title'))}
			>
				{unreadNews.length === 0 ? (
					<DropdownText>{t('news.empty')}</DropdownText>
				) : (
					<>
						<DropdownText>{t('news.hint')}</DropdownText>

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
										<strong>{languageDetector(entry.title.en, entry.title.pl)}</strong>

										<span className="date">
											{new Date(entry.date).toLocaleDateString(i18n.language)}
										</span>

										<span>{languageDetector(entry.text.en, entry.text.pl)}</span>
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
			</DropdownSection>
		</Dropdown>
	)
}
