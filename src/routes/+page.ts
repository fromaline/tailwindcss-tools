import type { SeoTags } from '$lib/models'

export const prerender = true

export const load = async () => {
	const seoTags = Object.freeze<SeoTags>({
		title: 'TailwindTools — a Set of Handy Tools for Tailwind CSS [for 2024]',
	})

	return {
		seoTags,
	}
}
