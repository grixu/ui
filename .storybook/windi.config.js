import { defineConfig } from 'windicss/helpers'
import { theme, plugins } from "../windi.config";

export default defineConfig({
  extract: {
    include: [
      'packages/**/stories/*.{vue,js,ts}',
      'packages/**/src/*.{vue,js,ts}',
    ],
    exclude: [
      'node_modules/**/*',
      'packages/**/node_modules/**/*',
      '.git/**/*',
    ],
  },
  theme,
  plugins
})
