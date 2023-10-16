import { LocalTestConfig } from "./config/local.test.config"

const globalVar = global as Record<string, unknown>

const localSetup = async (): Promise<void> => {
	// Load .env file
	const dotenv = require("dotenv")
	dotenv.config()

	// Establish test configuration
	const config = new LocalTestConfig()
	globalVar["config"] = config
}

export default localSetup
