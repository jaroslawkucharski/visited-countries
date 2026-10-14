import errorLarge from './404-large.webp'
import errorSmall from './404-small.webp'
import loginLarge from './login-large.webp'
import loginSmall from './login-small.webp'
import passwordResetLarge from './password-reset-large.webp'
import passwordResetSmall from './password-reset-small.webp'
import profileLarge from './profile-large.webp'
import profileSmall from './profile-small.webp'
import registerLarge from './register-large.webp'
import registerSmall from './register-small.webp'

export interface ResponsiveImage {
	small: string
	large: string
}

export const loginImage: ResponsiveImage = { small: loginSmall, large: loginLarge }
export const registerImage: ResponsiveImage = { small: registerSmall, large: registerLarge }
export const passwordResetImage: ResponsiveImage = {
	small: passwordResetSmall,
	large: passwordResetLarge,
}
export const profileImage: ResponsiveImage = { small: profileSmall, large: profileLarge }
export const pageNotFoundImage: ResponsiveImage = { small: errorSmall, large: errorLarge }
