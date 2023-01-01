export const authToken = () => ({
	headers: {
		Authorization: `${process.env.AUTH_TOKEN_TYPE} ${process.env.AUTH_TOKEN}`,
	},
})
