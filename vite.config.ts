import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

import {resolve, dirname} from 'path'
import {fileURLToPath} from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000
  },
  plugins: [react()],
  resolve: {
    alias: {
      actions: resolve(__dirname, 'src/actions'),
      components: resolve(__dirname, 'src/components'),
      constants: resolve(__dirname, 'src/constants'),
      containers: resolve(__dirname, 'src/containers'),
      hooks: resolve(__dirname, 'src/hooks'),
      lib: resolve(__dirname, 'src/lib'),
      reducers: resolve(__dirname, 'src/reducers'),
      sections: resolve(__dirname, 'src/sections'),
      store: resolve(__dirname, 'src/store'),
    }
  }
})
