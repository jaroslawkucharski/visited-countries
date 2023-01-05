import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: 'AIzaSyCHnGDlKr8T_-sHxuNjcrewkxkmDUhEkFc',
	authDomain: 'visited-countries-2137.firebaseapp.com',
	databaseURL: 'https://visited-countries-2137-default-rtdb.firebaseio.com',
	projectId: 'visited-countries-2137',
	storageBucket: 'visited-countries-2137.appspot.com',
	messagingSenderId: '1037234467790',
	appId: '1:1037234467790:web:6d11317d820c1e5fff719f',
	measurementId: 'G-CW8GHY8N7P',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
