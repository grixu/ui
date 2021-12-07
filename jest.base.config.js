module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "ts",
    "tsx",
    // tell Jest to handle *.vue files
    "vue",
  ],
  transform: {
    // process *.vue files with vue-jest
    "^.+\\.vue$": require.resolve("@vue/vue3-jest"),
    ".+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|avif)$":
      require.resolve("jest-transform-stub"),
    "^.+\\.jsx?$": require.resolve("babel-jest"),
    "^.+\\.tsx?$": require.resolve("ts-jest"),
  },
  transformIgnorePatterns: ["/node_modules/"],
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^~icons/.*": "<rootDir>/../../utilities/icons.js"
  },
  // serializer for snapshots
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: ["**/tests/**/*.spec.[jt]s?(x)", "**/tests/*.[jt]s?(x)"],
  // https://github.com/facebook/jest/issues/6766
  testURL: "http://localhost/",
  watchPlugins: [require.resolve("jest-watch-typeahead/filename"), require.resolve("jest-watch-typeahead/testname")],
  globals: {
    "__DEV__": true,
    "__BROWSER__": true,
    "ts-jest": {
      diagnostics: {
        warnOnly: true,
        babelConfig: true,
      },
    },
  },
  roots: ["<rootDir>"],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/coverage/",
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "(tests/.*.mock).tsx?$",
  ],
  coverageDirectory: "<rootDir>/coverage/",
  verbose: true,
}
