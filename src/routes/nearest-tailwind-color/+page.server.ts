import { v2_colors, v2_flattenedColors, v2_normalizedColors } from '$lib/constants/v2_colors'
import {
	v3_2_colors,
	v3_2_flattenedColors,
	v3_2_normalizedColors,
} from '$lib/constants/v3_2_colors'
import {
	v3_3_colors,
	v3_3_flattenedColors,
	v3_3_normalizedColors,
} from '$lib/constants/v3_3_colors'
import type { InitialColorsMapping, SeoTags } from '$lib/models'

export const load = async () => {
	const typed_v2_colors = v2_colors as unknown as InitialColorsMapping
	const typed_v3_2_colors = v3_2_colors as unknown as InitialColorsMapping
	const typed_v3_3_colors = v3_3_colors as unknown as InitialColorsMapping

	const seoTags = Object.freeze<SeoTags>({
		title: 'Find the nearest Tailwind CSS color — TailwindTools',
		description: 'Find the closest color from the Tailwind CSS color palette. Enter color in HEX, RGBA, HSLA, CMYK and get the class name for Tailwind CSS.',
		canonical: 'https://tailwindtools.xyz/nearest-tailwind-color'
	})

	return {
		seoTags,
		v2_colors: {
			rawColors: typed_v2_colors,
			normalizedColors: v2_normalizedColors,
			flattenedColors: v2_flattenedColors,
		},
		v3_2_colors: {
			rawColors: typed_v3_2_colors,
			normalizedColors: v3_2_normalizedColors,
			flattenedColors: v3_2_flattenedColors,
		},
		v3_3_colors: {
			rawColors: typed_v3_3_colors,
			normalizedColors: v3_3_normalizedColors,
			flattenedColors: v3_3_flattenedColors,
		},
	}
}
