import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

import { ENVS } from 'constants/env'

const firebaseConfig = {
	apiKey: ENVS.FIREBASE_API_KEY,
	authDomain: ENVS.FIREBASE_AUTH_DOMAIN,
	databaseURL: ENVS.FIREBASE_DATABASE_URL,
	projectId: ENVS.FIREBASE_PROJECT_ID,
	storageBucket: ENVS.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: ENVS.FIREBASE_MESSAGING_SENDER_ID,
	appId: ENVS.FIREBASE_APP_ID,
	measurementId: ENVS.FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const database = getDatabase(app)
export const analytics = getAnalytics(app)
