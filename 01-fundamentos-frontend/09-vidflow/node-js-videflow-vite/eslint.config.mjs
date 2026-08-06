import js from "@eslint/js"
import globals from "globals"

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser
      }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  }
]