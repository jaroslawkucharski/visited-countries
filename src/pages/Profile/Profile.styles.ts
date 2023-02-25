import styled, { css } from 'styled-components'

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

export const ImageComponent = styled.div`
	position: relative;

	&:hover {
		opacity: 0.5;

		&::before {
			width: 100%;
			content: 'EDIT';
			display: block;
			position: absolute;
			margin: 0 auto;
			text-align: center;
			top: 40%;
		}
	}

	> img {
		&:hover {
			opacity: 0.5;
		}
	}
`
