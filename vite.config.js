import { fileURLToPath } from 'node:url';
import path from 'node:path'; // Import the path module here

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/BuildYourBear/',
  alias: {
    '/@': path.resolve(__dirname, './src')
  },
  plugins: [
    vue(),
  ],
});