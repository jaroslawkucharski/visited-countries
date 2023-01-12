/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), VitePWA({ registerType: 'autoUpdate' })],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/config/tests.tsx'],
		coverage: {
			include: ['src/**/*.{ts,tsx}'],
			reporter: ['json-summary', 'text', 'html'],
		},
	},
})
