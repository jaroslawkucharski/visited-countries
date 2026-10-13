import i18next from 'i18next'
import styled, { css } from 'styled-components'

import { modalShow } from './modalShow'

const HelpContentComponent = styled.div`
	${({ theme: { spaces, colors } }) =>
		css`
			text-align: left;

			ul {
				margin: 0 0 ${spaces.medium};
				padding-left: ${spaces.medium};
				list-style: disc;
				display: flex;
				flex-direction: column;
				gap: ${spaces.tiny};
			}

			p {
				color: ${colors.color5};
			}
		`}
`

const HelpContent = () => (
	<HelpContentComponent>
		<ul>
			<li>{i18next.t('guide.step.map')}</li>
			<li>{i18next.t('guide.step.list')}</li>
			<li>{i18next.t('guide.step.date')}</li>
			<li>{i18next.t('guide.step.settings')}</li>
		</ul>

		<p>{i18next.t('guide.contact')}</p>
	</HelpContentComponent>
)

export const showHelpModal = () =>
	modalShow({
		id: 'help',
		title: i18next.t('guide.title'),
		content: <HelpContent />,
		actionName: i18next.t('guide.write'),
		cancelName: i18next.t('word.close'),
		action: () => {
			window.location.href = `mailto:${i18next.t('help.email')}?subject=${encodeURIComponent(
				String(i18next.t('help.subject')),
			)}&body=${encodeURIComponent(String(i18next.t('help.body')))}`
		},
	})
