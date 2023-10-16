import { SportradarAPI_MLB_V7_Location } from "./sportradar-api-mlb-v7-location"

export type SportradarAPI_MLB_V7_Venue = {
	address?: string
	capacity?: number
	city?: string
	country?: string
	desc?: string
	field_orientation?: string
	id: string
	location?: SportradarAPI_MLB_V7_Location
	market?: string
	name: string
	stadium_type?: string
	state?: string
	surface?: string
	time_zone?: string
	zip?: string
}
