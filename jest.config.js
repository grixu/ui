const base = require("@grixu/jest-config/src")

module.exports = {
  ...base,
  roots: ["<rootDir>"],
  projects: [
    "<rootDir>/packages/button",
    "<rootDir>/packages/avatar",
    "<rootDir>/packages/paginator",
    "<rootDir>/packages/list",
  ],
}
