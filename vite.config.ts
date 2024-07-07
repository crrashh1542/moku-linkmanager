import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            output: {
                hashCharacters: 'hex',
                assetFileNames: '[name].[hash].[ext]',
                chunkFileNames: '[name].[hash].js',
                entryFileNames: '[name].[hash].js',
                minifyInternalExports: true,
            }
        }
    }
})
