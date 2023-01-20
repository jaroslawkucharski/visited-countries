import 'config/i18n'
import 'config/sentry'
import { AuthProvider } from 'context/AuthContext'
import { ThemeColorProvider } from 'context/ThemeContext'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from 'store/store'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<AuthProvider>
					<ThemeColorProvider>
						<App />
					</ThemeColorProvider>
				</AuthProvider>
			</Router>
		</Provider>
	</React.StrictMode>,
)
