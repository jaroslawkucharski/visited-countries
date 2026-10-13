import { RefObject, useEffect, useRef } from 'react'

const FOCUSABLE =
	'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export const useFocusTrap = (ref: RefObject<HTMLElement | null>, onEscape?: () => void) => {
	const onEscapeRef = useRef(onEscape)

	onEscapeRef.current = onEscape

	useEffect(() => {
		const node = ref.current
		const previouslyFocused = document.activeElement as HTMLElement | null

		const getFocusable = () =>
			node ? Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE)) : []

		node?.focus()

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				event.stopPropagation()
				onEscapeRef.current?.()

				return
			}

			if (event.key !== 'Tab') return

			const focusable = getFocusable()

			if (focusable.length === 0) {
				event.preventDefault()

				return
			}

			const first = focusable[0]
			const last = focusable[focusable.length - 1]

			if (event.shiftKey && (document.activeElement === first || document.activeElement === node)) {
				event.preventDefault()
				last.focus()
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault()
				first.focus()
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			previouslyFocused?.focus?.()
		}
	}, [ref])
}
