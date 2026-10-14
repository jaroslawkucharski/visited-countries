import { auth } from 'config/firebase'
import {
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

export const singUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password)

export const singIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password)

export const logout = () => signOut(auth)

export const resetPassword = (email: string) => sendPasswordResetEmail(auth, email)
