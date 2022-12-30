import { ThemeColorProvider } from 'context/ThemeContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'utils/i18n'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeColorProvider>
			<App />
		</ThemeColorProvider>
	</React.StrictMode>,
)
