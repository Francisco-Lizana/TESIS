/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks:true,
  coverageProvider:"v8",
  moduleFileExtensions:["js","ts","jsx","tsx", "json","node"],
  roots:["<rootDir>/src"],
  testMatch:["**/test/**/*.[jt]s?(X)","**/?(*.)+(spec|test).[tj]s?(x)"],
  transform:{
    "^.+\\.(ts|tsx)$":"ts-jest",
  },
};