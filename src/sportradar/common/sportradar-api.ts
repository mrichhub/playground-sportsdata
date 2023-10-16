import { SportradarApiKey } from "./sportradar-api-key"

export abstract class SportradarAPI {
	protected readonly apiKey: SportradarApiKey
	protected abstract apiPrefix: string
	protected abstract locale: string
	protected abstract version: string

	private readonly baseUrl = "https://api.sportradar.com"

	constructor(
		config: SportradarAPIConfig,
	) {
		this.apiKey = config.apiKey
	}

	protected async fetch<T>(
		apiCall: string,
		queryParams: Record<string, string> = {},
	): Promise<T | undefined> {
		const queryString = new URLSearchParams({
			api_key: this.apiKey.apiKey,
			...queryParams,
		})

		const response = await fetch(
			`${this.baseUrl}/${this.apiPrefix}/${this.apiKey.accessLevel}/${this.version}/${this.locale}/${apiCall}.json?${queryString}`,
			{
				cache: "no-store",
				method: "GET",
			},
		)

		if (response.ok) {
			return await response.json()
		}

		return undefined
	}
}

export type SportradarAPIConfig = {
	apiKey: SportradarApiKey,
}
