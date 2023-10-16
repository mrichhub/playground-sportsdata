import { EnvironmentContext, JestEnvironmentConfig } from "@jest/environment"
import NodeEnvironment from "jest-environment-node"

export class TestEnvironment extends NodeEnvironment {
	constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
		super(config, context)
	}

	async setup() {
		await super.setup()
	}
}
