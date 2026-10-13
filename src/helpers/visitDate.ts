export const toMonthValue = (monthIndex: number) => String(monthIndex + 1).padStart(2, '0')

export const getMonthName = (monthIndex: number, language: string) => {
	const name = new Date(2000, monthIndex, 1).toLocaleDateString(language, { month: 'long' })

	return name.charAt(0).toUpperCase() + name.slice(1)
}

export const toVisitedAt = (year: string, month: string) => {
	if (!year) return null

	return month ? `${year}-${month}` : year
}

export const currentVisitedAt = () => {
	const now = new Date()

	return `${now.getFullYear()}-${toMonthValue(now.getMonth())}`
}

export const formatVisitedAt = (visitedAt?: string | null) => {
	if (!visitedAt) return null

	const [year, month] = visitedAt.split('-')

	return month ? `${month}.${year}` : year
}
