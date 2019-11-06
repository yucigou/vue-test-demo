module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverageFrom: ["src/**/*.{js,vue}"],
  reporters: ["default", "jest-html-reporters"]
};
