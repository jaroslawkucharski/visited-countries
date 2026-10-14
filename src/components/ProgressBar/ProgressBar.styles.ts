import styled, { css } from 'styled-components'

interface ProgressBarComponentProps {
	limit?: number
	value: number
}

const barProgress = (value: number, limit: number) =>
	`${value > limit ? 100 : (value / limit) * 100}%`

export const ProgressBarComponent = styled.div<ProgressBarComponentProps>`
	width: 100%;
	height: 10px;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	${({ theme: { colors }, limit = 100, value = 0 }) =>
		css`
			.container {
				padding: 0 3px;
				width: 100%;
				height: 10px;
				position: relative;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-radius: 20px;
				background: ${colors.main20};
			}

			.bar {
				width: ${barProgress(value, limit)};
				height: 6px;
				border-radius: 20px;
				background: ${colors.main100};
				animation: progressAnimation 1s;
			}

			@keyframes progressAnimation {
				0% {
					width: 0%;
				}
				[${barProgress(value, limit)}] {
					width: ${barProgress(value, limit)};
				}
			}
		`}
`
