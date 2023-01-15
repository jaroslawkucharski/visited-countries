import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

import { ENVS } from 'constants/env'

Sentry.init({
	dsn: ENVS.SENTRY_DNS,
	integrations: [new BrowserTracing()],
	tracesSampleRate: 1.0,
	allowUrls: [/http:\/\/visited-countries.vercel.app/],
})
