import * as Sentry from '@sentry/capacitor'
import * as SentryReact from '@sentry/react'

import { ENVS } from 'constants/env'

Sentry.init(
	{
		dsn: ENVS.SENTRY_DNS,
		integrations: [SentryReact.browserTracingIntegration()],
		tracesSampleRate: 1.0,
		allowUrls: [ENVS.SENTRY_ALLOW_URL],
		enableLogs: true,
	},
	SentryReact.init,
)
