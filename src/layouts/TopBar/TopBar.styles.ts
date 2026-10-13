import styled, { css } from 'styled-components'

export const TopBarComponent = styled.div`
	width: 100%;

	${({ theme: { spaces, colors, breakpoints } }) =>
		css`
			padding: ${spaces.medium} ${spaces.big};
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: ${colors.main100};

			@media (max-width: ${breakpoints.mobile}px) {
				padding: ${spaces.big} ${spaces.big} calc(${spaces.medium} + ${spaces.tiny}) ${spaces.big};
				justify-content: center;
				flex-direction: column;
			}
		`}
`

export const SettingsComponent = styled.div`
	${({ theme: { spaces } }) =>
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			gap: ${spaces.tiny};
			flex-wrap: wrap;
		`}
`

export const VisitedSectionComponent = styled.div`
	width: 100%;
	padding: 10px 20px;

	.quantity {
		padding: 0 2px;
		display: flex;
		justify-content: space-between;
		align-items: top;
		gap: 10px;
	}
`

export const BellComponent = styled.span`
	${({ theme: { colors } }) =>
		css`
			position: relative;
			display: inline-flex;

			.dot {
				position: absolute;
				top: -2px;
				right: -2px;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background: ${colors.error};
			}
		`}
`

export const NewsEntryComponent = styled.div`
	${({ theme: { spaces, colors } }) =>
		css`
			ul {
				color: ${colors.main100};
				list-style: disc;
				margin: ${spaces.mini} 0 0;
				padding-left: ${spaces.medium};
				font-size: 12px;
				line-height: 1.5;
				text-align: left;
			}
		`}
`

export const MonthsComponent = styled.div`
	${({ theme: { colors } }) =>
		css`
			width: 100%;
			height: 10px;
			padding: 2px 3px;
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			gap: 3px;
			border-radius: 20px;
			background: ${colors.main20};

			.month {
				height: 6px;
				border-radius: 20px;
			}

			.visited {
				background: ${colors.main100};
			}
		`}
`
