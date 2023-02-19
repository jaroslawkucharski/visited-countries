<div align='center'>

# <img src='./src/assets/images/logo_dark.svg' width='400px' />

<img src='./coverage/badges/badge-statements.svg' />
<img src='./coverage/badges/badge-branches.svg' />
<img src='./coverage/badges/badge-functions.svg' />
<img src='./coverage/badges/badge-lines.svg' />

##

TECH<strong>STACK</strong>

![](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![](https://img.shields.io/badge/PWA-5A0FC8.svg?style=for-the-badge&logo=PWA&logoColor=white)
![](https://img.shields.io/badge/Capacitor-119EFF.svg?style=for-the-badge&logo=Capacitor&logoColor=white)
![](https://img.shields.io/badge/Testing%20Library-E33332.svg?style=for-the-badge&logo=Testing-Library&logoColor=white)
![](https://img.shields.io/badge/Vitest-6E9F18.svg?style=for-the-badge&logo=Vitest&logoColor=white)
![](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white)
![](https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=Firebase&logoColor=black)
![](https://img.shields.io/badge/Sentry-362D59.svg?style=for-the-badge&logo=Sentry&logoColor=white)
![](https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black)
![](https://img.shields.io/badge/i18next-26A69A.svg?style=for-the-badge&logo=i18next&logoColor=white)
![](https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
![](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
![](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white)
![](https://img.shields.io/badge/Redux-764ABC.svg?style=for-the-badge&logo=Redux&logoColor=white)
![](https://img.shields.io/badge/React_Simple_Maps-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![](https://img.shields.io/badge/Formik-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![](https://img.shields.io/badge/React_Icons-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![](https://img.shields.io/badge/Toastify-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white)
![](https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black)

##

APP<strong>DEMO</strong>

<a href="https://visited-countries.vercel.app/" style='color: red;'>`https://visited-countries.vercel.app`</a>

<img src='./src/assets/images/mocks/mockup-login.png' />

<br />
<br />

##

APP<strong>CONFIG</strong>

<div align='left'>

> <i>1. Clone this repository and install dependencies</i>
>
> `git clone https://github.com/jaroslaw91/visited-countries.git`
>
> `cd visited-countries`
>
> `pnpm install`

</div>

<div align='left'>

> <i>2. Configure your firebase (https://cloud.google.com/firestore/docs/client/get-firebase)</i>
>
> - Add <b>Authentication</b> and Sign-in method with <b>Email/Password</b>
>
> - Create <b>Realtime Database</b> and add rules:
>
>   > ```
>   > {
>   >  "rules": {
>   >    ".read": false,
>   >    ".write": false,
>   >    "users": {
>   >      "$user_id": {
>   >         ".read": "$user_id === auth.uid",
>   >        	".write": "$user_id === auth.uid"
>   >      }
>   >    }
>   >  }
>   > }
>   > ```
>
> - Create <b>Storage</b> and create <b>images/</b> catalog

</div>

<div align='left'>

> <i>3. Add envs to the project (Sentry & Firebase)</i>
>
> > ```
> > VITE_SENTRY_DNS=
> > VITE_SENTRY_ALLOW_URL=
> >
> > VITE_FIREBASE_API_KEY=
> > VITE_FIREBASE_AUTH_DOMAIN=
> > VITE_FIREBASE_DATABASE_URL=
> > VITE_FIREBASE_PROJECT_ID=
> > VITE_FIREBASE_STORAGE_BUCKET=
> > VITE_FIREBASE_MESSAGING_SENDER_ID=
> > VITE_FIREBASE_APP_ID=
> > VITE_FIREBASE_MEASUREMENT_ID=
> > ```

</div>

<div align='left'>

> <i>4. Fire up the app with `pnpm dev` and... Enjoy!</i>

</div>

<img src='./src/assets/images/mocks/mockup-app.png' />

<br />
<br />

##

TODO<strong>LIST</strong>

- [x] removing a country from the list of countries
- [x] adding a country to the list of countries
- [ ] complete the tests
- [ ] adding country with Select
- [ ] code optimization
- [ ] add delete confirmation modal
- [ ] add country information
- [ ] add profile update
- [ ] add a Help tab

</div>
