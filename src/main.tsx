import 'config/i18n'
import { AuthProvider } from 'context/AuthContext'
import { ThemeColorProvider } from 'context/ThemeContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<ThemeColorProvider>
					<App />
				</ThemeColorProvider>
			</AuthProvider>
		</Router>
	</React.StrictMode>,
)
