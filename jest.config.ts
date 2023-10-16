import { Config } from "jest"

export const localConfig: Config = {
	globalSetup: "<rootDir>/__tests__/setup/setup.local.ts",
	globalTeardown: "<rootDir>/__tests__/setup/teardown.ts",
	preset: "ts-jest",
	rootDir: "src",
	testEnvironment: "node",
	testPathIgnorePatterns: [
		"/node_modules/",
		"helpers",
		"setup",
	],
}

export default localConfig
