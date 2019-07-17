module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy"
  },
  automock: false,
  setupFilesAfterEnv: ["<rootDir>setupJest.js"],
  testEnvironment: "node"
};
