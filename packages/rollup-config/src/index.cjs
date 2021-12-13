const vue = require('rollup-plugin-vue')
const replace = require('@rollup/plugin-replace')
const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve').default
const pascalcase = require('pascalcase')
const {terser} = require("rollup-plugin-terser")
const WindiCSS = require('rollup-plugin-windicss').default
const { babel } = require('@rollup/plugin-babel')
const cssOnly = require('rollup-plugin-css-only')
const Icons = require('unplugin-icons/rollup')
const path = require("path");

const getAuthors = (pkg) => {
  const { contributors, author } = pkg

  const authors = new Set()
  if (contributors && contributors)
    contributors.forEach((contributor) => {
      authors.add(contributor.name)
    })
  if (author) authors.add(author.name)

  return Array.from(authors).join(', ')
}

const createBanner = (pkg) => {
  return `/*!
* ${pkg.name} v${pkg.version}
* (c) ${new Date().getFullYear()} ${getAuthors(pkg)}
* @license ${pkg.license}
*/`
}

const createReplacePlugin = (
  pkg,
  isProduction,
  isBundlerESMBuild,
  isBrowserBuild,
  isGlobalBuild,
  isNodeBuild,
) => {
  const replacements = {
    preventAssignment: true,
    __COMMIT__: `"${process.env.COMMIT}"`,
    __VERSION__: `"${pkg.version}"`,
    __DEV__: isBundlerESMBuild
      ? // preserve to be handled by bundlers
      `(process.env.NODE_ENV !== 'production')`
      : // hard coded dev/prod builds
      !isProduction,
    // this is only used during tests
    __TEST__: isBundlerESMBuild ? `(process.env.NODE_ENV === 'test')` : false,
    // If the build is expected to run directly in the browser (global / esm builds)
    __BROWSER__: isBrowserBuild,
    // is targeting bundlers?
    __BUNDLER__: isBundlerESMBuild,
    __GLOBAL__: isGlobalBuild,
    // is targeting Node (SSR)?
    __NODE_JS__: isNodeBuild,
    'process.env.NODE_ENV': JSON.stringify('production'),
    __VUE_OPTIONS_API__: JSON.stringify(true),
    __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
  }

  // allow inline overrides like
  //__RUNTIME_COMPILE__=true yarn build
  Object.keys(replacements).forEach((key) => {
    if (key in process.env) {
      replacements[key] = process.env[key]
    }
  })

  return replace(replacements)
}

const createConfig = (format, config, banner, pkg) => {
  if (format === 'css') {
    return createCssConfig(config, banner)
  }

  const { file: fileName, format: fileFormat, minify } = config
  const output = {
    format: fileFormat,
    file: fileName,
    globals: { vue: 'Vue' },
    externalLiveBindings: false,
    exports: 'auto',
    banner
  }

  const isProductionBuild = /\.prod\.js$/.test(output.file)
  const isGlobalBuild = format === 'global' || fileFormat === 'umd'
  const isRawESMBuild = format === 'esm'
  const isNodeBuild = format === 'cjs'
  const isBundlerESMBuild = /esm-bundler/.test(format)

  if (isGlobalBuild) output.name = pascalcase(pkg.name)

  const productionPlugins = []

  if (minify) {
    productionPlugins.push(
      terser({
        module: /^esm/.test(format),
        compress: {
          ecma: 2015,
          pure_getters: true,
        },
      })
    )
  }

  return {
    input: 'src/index.ts',
    output,
    plugins: [
      createReplacePlugin(
        pkg,
        isProductionBuild,
        isBundlerESMBuild,
        isGlobalBuild || isRawESMBuild || isBundlerESMBuild,
        isGlobalBuild,
        isNodeBuild,
      ),
      resolve({
        extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.vue']
      }),
      Icons({ compiler: 'vue3' }),
      vue(),
      commonjs(),
      babel({
        presets: ['@babel/preset-typescript'],
        configFile: false,
        extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue', '.ts', '.tsx']
      }),
      ...productionPlugins
    ],
    external: ['vue'],
  }
}

const createCssConfig = (config, banner = '') => {
  const { file: fileName } = config
  const output = {
    format: 'es',
    file: fileName,
    banner
  }

  return {
    input: path.join(__dirname, 'css.js'),
    output,
    plugins: [
      resolve({
        extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.css']
      }),
      ...WindiCSS(),
      cssOnly({ output: fileName.replace('./dist/', '') }),
    ],
  }
}

module.exports = {
  createConfig,
  createCssConfig,
  createReplacePlugin,
  createBanner
}
