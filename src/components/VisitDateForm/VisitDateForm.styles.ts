import styled, { css } from 'styled-components'

export const VisitDateFormComponent = styled.div`
	${({ theme: { spaces, breakpoints } }) =>
		css`
			display: grid;
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
			gap: ${spaces.small};

			@media (max-width: ${breakpoints.mobile}px) {
				grid-template-columns: minmax(0, 1fr);
			}
		`}
`
