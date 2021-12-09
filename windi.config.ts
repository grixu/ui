import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import defaultTheme from 'windicss/defaultTheme'
import forms from 'windicss/plugin/forms'

export const plugins = [forms]
export const theme = {
  extend: {
    colors: {
      primary: {
        light: colors.cyan['600'],
        DEFAULT: colors.cyan['700'],
        dark: colors.cyan['800'],
        darker: colors.cyan['900'],
      },
      color: {
        lighter: colors.gray['500'],
        light: colors.gray['700'],
        DEFAULT: colors.gray['900'],
      },
      gray: {
        light: colors.gray['300'],
        DEFAULT: colors.gray['400'],
        dark: colors.gray['600'],
      },
      background: colors.gray['100'],
      white: colors.white,
      success: colors.green['700'],
      error: colors.red['700'],
      warning: colors.yellow['500'],
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
}

export default defineConfig({
  extract: {
    include: [
      'src/*.{vue,js,ts}',
    ],
    exclude: [
      'node_modules/**/*',
      'stories/**/*',
      '.git/**/*',
    ],
  },
  theme,
  plugins,
})
