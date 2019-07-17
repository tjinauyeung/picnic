module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy"
  },
  automock: false,
  setupFilesAfterEnv: ["<rootDir>setupJest.ts"]
};
