import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "src/cypress/integration/**/*.spec.{js,jsx,ts,tsx}", // Points to the correct location
    baseUrl: "http://localhost:3000", // Optional: set your base URL
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
