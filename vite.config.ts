import react from '@vitejs/plugin-react-swc'
// eslint-disable-next-line import/order
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

//eslint-disable-next-line import/no-default-export
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
})
