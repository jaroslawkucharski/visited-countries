import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const NavigareComponent = styled(NavLink)`
	${({ theme: { colors } }) =>
		css`
			color: ${colors.color5};

			&.active {
				color: ${colors.color2};
			}
		`}
`
