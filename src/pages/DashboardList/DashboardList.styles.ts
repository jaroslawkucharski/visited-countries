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
				padding: 0 0 120px;
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

export const SearchComponent = styled.div`
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 1;

	${({ theme: { colors, spaces } }) =>
		css`
			padding: ${spaces.tiny} 0;
			background: ${colors.main};
		`}

	input {
		padding-right: 48px;
	}
`

export const SearchIconComponent = styled.button`
	${({ theme: { colors } }) =>
		css`
			position: absolute;
			top: 50%;
			right: 14px;
			transform: translateY(-50%);
			display: flex;
			padding: 0;
			border: none;
			background: none;
			color: ${colors.secondary};
			font-size: 22px;
			cursor: pointer;
		`}
`

export const EmptyResultsComponent = styled.p`
	${({ theme: { colors, spaces } }) =>
		css`
			padding: ${spaces.small} 0;
			color: ${colors.color5};
		`}
`
