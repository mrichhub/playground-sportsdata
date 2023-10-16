import { TestConfig } from "./test.config"

export class LocalTestConfig extends TestConfig {
	readonly sportradarAPI_MLB_V7_accessLevel = process.env.SPORTRADAR_API_MLB_V7_ACCESSLEVEL as string
	readonly sportradarAPI_MLB_V7_apiKey = process.env.SPORTRADAR_API_MLB_V7_APIKEY as string
}
