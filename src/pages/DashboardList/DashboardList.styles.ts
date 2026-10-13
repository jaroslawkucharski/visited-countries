import styled, { css } from 'styled-components'

interface IconComponentProps {
	isRemoved?: boolean
	isFavorite?: boolean
}

export const ProfileColumnComponent = styled.div`
	${({ theme: { spaces, breakpoints } }) =>
		css`
			margin: 0 auto;
			padding: 0 0 0 ${spaces.big};
			align-items: center;

			@media (max-width: ${breakpoints.mobile}px) {
				width: 100%;
				padding: 0;
				height: calc(100vh - 172px);
				overflow: none;
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

export const ListItemComponent = styled.li`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.name {
		flex: 1;
		min-width: 0;
	}
`

export const ActionsComponent = styled.div`
	${({ theme: { colors } }) =>
		css`
			display: flex;
			align-items: center;
			flex-shrink: 0;

			.date {
				font-size: 12px;
				color: ${colors.color5};
				white-space: nowrap;
			}
		`}
`

export const IconComponent = styled.div<IconComponentProps>`
	${({ theme: { spaces, colors }, isRemoved, isFavorite }) =>
		css`
			cursor: pointer;
			color: ${isFavorite ? colors.error : 'inherit'};
			padding: ${spaces.tiny};
			display: flex;
			flex-shrink: 0;

			&:hover {
				color: ${isRemoved ? colors.error : colors.success};
			}
		`}
`
