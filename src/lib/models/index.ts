export type InitialColorsMapping = Record<string, string | Record<string, string>>

export type NormalizedColorsMapping = Record<string, Record<string, string>>

export type SeoTags = {
	title?: string
	description?: string
	canonical?: string
	image?: string
	imageAlt?: string
	type?: 'website'
}