import { SportradarAPI_MLB } from "./mlb"

export class SportradarAPI {
	static get mlb(): SportradarAPI_MLB {
		return new SportradarAPI_MLB()
	}
}
