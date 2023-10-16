import { getTestConfig } from "../../../../__tests__/helpers/get.test.config"
import { TestConfig } from "../../../../__tests__/setup/config/test.config"
import { SportradarAPI_MLB_V7 } from "../sportradar-api-mlb-v7"

let config: TestConfig
let mlb: SportradarAPI_MLB_V7

beforeAll(() => {
	config = getTestConfig()
})

beforeEach(() => {
	mlb = new SportradarAPI_MLB_V7({
		apiKey: {
			accessLevel: config.sportradarAPI_MLB_V7_accessLevel,
			apiKey: config.sportradarAPI_MLB_V7_apiKey
		},
	})
})

describe("SportradarAPI_MLB_V7", () => {
	describe("dailySchedule", () => {
		it("successfully retrieves data from sportradar", async () => {
			const dailySchedule = await mlb.dailySchedule(2023, 10, 12)

			expect(dailySchedule).toBeDefined()
			expect(dailySchedule!.games).toBeDefined()
			expect(dailySchedule!.games!.length).toEqual(2)

			const bravesVSPhillies = dailySchedule!.games![0]
			expect(bravesVSPhillies.id).toEqual("8603edea-a0da-4388-894a-88833ad8c965")
			expect(bravesVSPhillies.status).toEqual("closed")
			expect(bravesVSPhillies.coverage).toEqual("full")

			const dodgersVSDiamondbacks = dailySchedule!.games![1]
			expect(dodgersVSDiamondbacks.id).toEqual("b0f1f1e1-c064-4937-9934-c18f6fa8a75d")
			expect(dodgersVSDiamondbacks.status).toEqual("unnecessary")
			expect(dodgersVSDiamondbacks.coverage).toEqual("full")
		})
	})
})
