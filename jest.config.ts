export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test|tests).[tj]s?(x)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
