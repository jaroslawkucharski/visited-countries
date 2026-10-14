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
				padding: ${spaces.medium} ${spaces.big} ${spaces.medium} ${spaces.big};
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

	.mark-all {
		margin-top: 10px;
		padding: 0;
		border: none;
		background: none;
		color: inherit;
		font-family: inherit;
		font-size: 12px;
		text-decoration: underline;
		cursor: pointer;
	}

	.quantity {
		padding: 0 2px;
		display: flex;
		justify-content: space-between;
		align-items: top;
		gap: 10px;
	}
`

export const NewsListComponent = styled.ul`
	${({ theme: { colors, spaces } }) =>
		css`
			margin: ${spaces.tiny} 0 0;
			padding: 0;
			list-style: none;
			max-height: 360px;
			overflow-y: auto;
			display: flex;
			flex-direction: column;
			gap: ${spaces.tiny};

			button {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: 2px;
				padding: ${spaces.tiny} ${spaces.small};
				border: none;
				border-left: 3px solid ${colors.errorText};
				border-radius: 4px;
				background: ${colors.secondary80};
				color: ${colors.main100};
				font-family: inherit;
				font-size: 12px;
				line-height: 1.4;
				text-align: left;
				cursor: pointer;

				&:hover {
					opacity: 0.85;
				}
			}

			strong {
				font-size: 14px;
				font-weight: 600;
			}

			.date {
				opacity: 0.85;
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

export const FavoritesListComponent = styled.ul`
	${({ theme: { colors, spaces } }) =>
		css`
			margin: 0;
			padding: 0;
			list-style: none;
			max-height: 260px;
			overflow-y: auto;
			color: ${colors.main100};
			font-size: 14px;

			li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: ${spaces.tiny};
				padding: ${spaces.mini} 0;
			}

			.actions {
				flex-shrink: 0;
				display: flex;
			}

			button {
				flex-shrink: 0;
				display: flex;
				padding: ${spaces.mini};
				border: none;
				background: none;
				color: inherit;
				cursor: pointer;

				&:hover {
					color: ${colors.errorText};
				}
			}
		`}
`
