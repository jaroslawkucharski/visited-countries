import { auth } from 'config/firebase'
import {
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

// Sign up user
export const singUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password)

// Sign in user
export const singIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password)

// Logout user
export const logout = () => signOut(auth)

// Reset user password
export const resetPassword = (email: string) => sendPasswordResetEmail(auth, email)
