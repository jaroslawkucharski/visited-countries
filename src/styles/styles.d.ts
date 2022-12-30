import 'styled-components'

import { darkTheme, lightTheme } from 'styles/theme'

declare module 'styled-components' {
	type LightTheme = typeof lightTheme
	type DarkTheme = typeof darkTheme

	export interface DefaultTheme extends LightTheme, DarkTheme {}
}
