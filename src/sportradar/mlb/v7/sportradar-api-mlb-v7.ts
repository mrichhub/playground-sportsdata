import { SportradarAPI, SportradarAPIConfig } from "../../common/sportradar-api"
import { SportradarAPI_MLB_V7_DailySchedule } from "./types/sportradar-api-mlb-v7-dailyschedule"

export class SportradarAPI_MLB_V7 extends SportradarAPI {
	protected readonly apiPrefix = "mlb"
	protected readonly locale = "en"
	protected readonly version = "v7"

	constructor(
		config: SportradarAPI_MLB_V7_Config,
	) {
		super(config)
	}

	async dailySchedule(year: number, month: number, day: number): Promise<SportradarAPI_MLB_V7_DailySchedule | undefined> {
		const dailySchedule = await this.fetch<SportradarAPI_MLB_V7_DailySchedule>(`games/${year}/${month}/${day}/schedule`)

		for (const game of dailySchedule?.games || []) {
			if (game.scheduled) {
				game.scheduled = new Date(game.scheduled)
			}
		}

		return dailySchedule
	}
}

export type SportradarAPI_MLB_V7_Config = SportradarAPIConfig & {
}
