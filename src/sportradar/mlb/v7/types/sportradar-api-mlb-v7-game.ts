import { SportradarAPI_MLB_V7_GameCoverage } from "./sportradar-api-mlb-v7-gamecoverage"
import { SportradarAPI_MLB_V7_GameStatus } from "./sportradar-api-mlb-v7-gamestatus"
import { SportradarAPI_MLB_V7_Team } from "./sportradar-api-mlb-v7-team"
import { SportradarAPI_MLB_V7_Venue } from "./sportradar-api-mlb-v7-venue"

export type SportradarAPI_MLB_V7_Game = {
	attendance?: number
	away?: SportradarAPI_MLB_V7_Team
	away_team?: string
	coverage?: SportradarAPI_MLB_V7_GameCoverage
	day_night?: "D" | "N"
	double_header?: boolean
	duration?: string
	entry_mode?: string
	game_number?: number
	home?: SportradarAPI_MLB_V7_Team
	home_team?: string
	id: string
	ps_round?: string
	ps_game?: number

	reference?: string
	scheduled?: Date
	split_squad?: boolean
	status?: SportradarAPI_MLB_V7_GameStatus
	suspended_game_is_official?: boolean
	tbd?: boolean
	title?: string
	venue?: SportradarAPI_MLB_V7_Venue
}
