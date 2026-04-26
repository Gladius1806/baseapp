import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: 'esbuild',
  },
  server: {
    host: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Security-Policy':
        "frame-ancestors 'self' https://farcaster.xyz https://*.farcaster.xyz https://warpcast.com https://*.warpcast.com https://base.dev https://*.base.dev;",
    },
  },
  preview: {
    headers: {
      'Content-Security-Policy':
        "frame-ancestors 'self' https://farcaster.xyz https://*.farcaster.xyz https://warpcast.com https://*.warpcast.com https://base.dev https://*.base.dev;",
    },
  },
})
