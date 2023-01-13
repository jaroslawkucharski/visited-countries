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
			all: true,
			include: [
				'src/components/**/*.{ts,tsx}',
				'src/config/**/*.{ts,tsx}',
				'src/constants/**/*.{ts,tsx}',
				'src/context/**/*.{ts,tsx}',
				'src/helpers/**/*.{ts,tsx}',
				'src/hooks/**/*.{ts,tsx}',
				'src/layouts/**/*.{ts,tsx}',
				'src/pages/**/*.{ts,tsx}',
				'src/styles/**/*.{ts,tsx}',
				'src/utils/**/*.{ts,tsx}',
			],
			exclude: ['src/**/index.{ts,tsx}', 'src/**/*.test.{ts,tsx}'],
			reporter: ['json-summary', 'text', 'html'],
		},
	},
})
