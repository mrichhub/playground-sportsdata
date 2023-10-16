import { SportradarAPI_MLB_V7_Game } from "./sportradar-api-mlb-v7-game"
import { SportradarAPI_MLB_V7_League } from "./sportradar-api-mlb-v7-league"

export type SportradarAPI_MLB_V7_DailySchedule = {
	date?: string
	league?: SportradarAPI_MLB_V7_League
	games?: Array<SportradarAPI_MLB_V7_Game>
}
