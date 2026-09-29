import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "jest-expo",
  setupFiles: ["react-native-unistyles/mocks", "./jest.setup.unistyles.ts"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg|react-native-reanimated|tamagui|@tamagui/.*)",
  ],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  coverageReporters: ["text", "lcov", "json-summary"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.story.tsx",
    "!src/**/*.type.ts",
    "!src/**/*.const.ts",
    "!src/**/index.ts",
    "!src/tokens/**",
    "!src/mocks/**",
    "!src/storybook-sort.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};

export default config;
