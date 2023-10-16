import { SportradarAPI_MLB_V7, SportradarAPI_MLB_V7_Config } from "./v7/sportradar-api-mlb-v7"

export class SportradarAPI_MLB {
	static v7(config: SportradarAPI_MLB_V7_Config): SportradarAPI_MLB_V7 {
		return new SportradarAPI_MLB_V7(config)
	}
}
