<script lang="ts">
	import { writable } from 'svelte/store'
	import { colord } from 'colord'
	import type { Selected } from 'bits-ui'
	// @ts-expect-error no types
	import nearestColour from 'nearest-color'
	import { normalizeColors } from '$lib/utils/normalizeColors'
	import * as Select from '$lib/components/ui/select'
	import ColorPicker from '$lib/components/ColorPicker.svelte'
	import * as Card from '$lib/components/ui/card'
	import { pickedColor } from '$lib/stores'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	type TailwindVersion = 'v2_colors' | 'v3_2_colors' | 'v3_3_colors'

	const tailwindVersions: { id: TailwindVersion; text: string }[] = [
		{ id: 'v3_3_colors', text: 'v3.3+' },
		{ id: 'v3_2_colors', text: 'v3.2' },
		{ id: 'v2_colors', text: 'v2' },
	]

	let pickedTailwindVersion: TailwindVersion = 'v3_3_colors'

	const colorsMapping = writable(data[pickedTailwindVersion].normalizedColors)
	let justCopiedColor = ''
	let nearestColor = ''
	let nearestGroupName = ''
	let nearestColorName = ''

	$: {
		if ($pickedColor && colord($pickedColor).isValid()) {
			try {
				const getNearestColor = nearestColour.from(data[pickedTailwindVersion].flattenedColors)
				const nearestColorObject: { name: string; value: string } = getNearestColor($pickedColor)
				nearestColor = nearestColorObject.value
				nearestColorName = nearestColorObject.name
			} catch (e) {
				console.log('Error finding nearest color')
			}

			nearestGroupName = nearestColorName.includes('-')
				? nearestColorName.split('-')[0]
				: nearestColorName

			colorsMapping.set(
				normalizeColors({
					[nearestGroupName]: data[pickedTailwindVersion].rawColors[nearestGroupName],
				})
			)
		}
	}

	const onSelectedChange = (value: Selected<unknown> | undefined) => {
		if (value) {
			pickedTailwindVersion = value.value as TailwindVersion
		}
	}

	$: textColor = colord(nearestColor).isDark() ? '#fff' : '#000'
	$: fullColorName = `${nearestColorName}`
</script>

<section
	class="mx-auto flex max-w-[980px] flex-[1] flex-col items-center gap-2 px-3 py-8 pb-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
>
	<h1
		class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
	>
		Find The Nearest Tailwind CSS Color
	</h1>

	<h2 class="text-balance text-muted-foreground max-w-[750px] text-center text-lg sm:text-xl">
		This tool allows you to bring your custom color and find the closest color from the Tailwind CSS
		palette.
	</h2>

	<Card.Root class="mt-4 max-w-[500px]">
		<Card.Header>
			<Card.Title>Enter Your Color</Card.Title>
		</Card.Header>
		<Card.Content>
			<ColorPicker />
		</Card.Content>
		<Card.Footer>
			<Select.Root {onSelectedChange}>
				<Select.Trigger class="w-full" id="tailwindcss-version" name="tailwindcss-version">
					<Select.Value placeholder="Tailwind CSS version" />
				</Select.Trigger>
				<Select.Content>
					{#each tailwindVersions as { id, text }}
						<Select.Item value={id}>{text}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</Card.Footer>
	</Card.Root>

	<div class="mt-6 flex items-start justify-center gap-10">
		<div class="flex flex-col gap-2">
			<h4 class="text-balance text-muted-foreground text-sm font-semibold">Your Color</h4>

			<button
				class="flex w-full transform-gpu cursor-pointer appearance-none items-center gap-x-3 outline-none transition-transform focus-visible:scale-105 sm:block sm:space-y-1.5 sm:hover:scale-105"
				on:click={() => {
					window.navigator.clipboard.writeText($pickedColor).then(() => {
						justCopiedColor = $pickedColor

						setTimeout(() => {
							justCopiedColor = ''
						}, 1500)
					})
				}}
			>
				<div
					class="flex h-10 w-16 items-center justify-center rounded text-center dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
					style={`background-color: ${$pickedColor}`}
				>
					{#if justCopiedColor === $pickedColor}
						<span
							class="block whitespace-nowrap text-center text-sm font-semibold"
							style={`color: ${colord($pickedColor).isDark() ? '#fff' : '#000'}`}
						>
							Copied!
						</span>
					{/if}
				</div>

				<div class="px-0.5">
					<span
						class="block text-left text-xs font-semibold lowercase text-slate-500 dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs"
					>
						{$pickedColor}
					</span>
				</div>
			</button>
		</div>

		<div class="flex flex-col gap-2">
			<h4 class="text-balance text-muted-foreground text-sm font-semibold">Nearest Color</h4>

			<button
				class="flex w-full transform-gpu cursor-pointer appearance-none items-center gap-x-3 outline-none transition-transform focus-visible:scale-105 sm:block sm:space-y-1.5 sm:hover:scale-105"
				on:click={() => {
					window.navigator.clipboard.writeText(fullColorName).then(() => {
						justCopiedColor = fullColorName

						setTimeout(() => {
							justCopiedColor = ''
						}, 1500)
					})
				}}
			>
				<div
					class="flex h-10 w-16 items-center justify-center rounded text-center dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
					style={`background-color: ${nearestColor}`}
				>
					{#if justCopiedColor === fullColorName}
						<span
							class="block whitespace-nowrap text-center text-sm font-semibold"
							style={`color: ${textColor}`}
						>
							Copied!
						</span>
					{/if}
				</div>

				<div class="px-0.5">
					<span
						class="block text-start text-xs font-medium text-slate-900 dark:text-white 2xl:w-full"
					>
						{#if nearestGroupName === nearestColorName}
							{nearestColorName}
						{:else}
							{fullColorName}
						{/if}
					</span>

					<span
						class="block text-left text-xs font-semibold lowercase text-slate-500 dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs"
					>
						{nearestColor}
					</span>
				</div>
			</button>
		</div>
	</div>
</section>
