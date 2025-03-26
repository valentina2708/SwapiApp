/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest', 
  testEnvironment: 'jsdom', 
  transform: {
    '^.+\\.tsx?$': 'ts-jest', 
  },
  moduleNameMapper: {
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy', 
  },

};
