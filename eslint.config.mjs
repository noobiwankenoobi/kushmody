// eslint.config.js
import stylistic from "@stylistic/eslint-plugin"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  [
    {
      files: ["**/*.vue", "**/*.js", "**/*.json", "**/*.md", "**/*.mjs"],
    },
    {
      plugins: {
        "@stylistic": stylistic,
      },
      rules: {
        // Stylistic rules
        // ...
      },
    },
    stylistic.configs.customize({
      quotes: "double",
      semi: false,
      commaDangle: "always-multiline",
    }),

  ],
)
