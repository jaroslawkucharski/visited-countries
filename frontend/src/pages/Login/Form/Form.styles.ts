import styled, { css } from 'styled-components'

export const FormComponent = styled.form`
	width: 100%;

	${({ theme: { spaces } }) =>
		css`
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: ${spaces.medium};
		`}
`
