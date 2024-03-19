<script lang="ts">
	import { onMount } from 'svelte'
	import type Pickr from '@simonwep/pickr'
	import { pickedColor } from '$lib/stores'

	let pickerDiv: HTMLElement | null = null

	onMount(() => {
		let pickerInstance: Pickr | null = null

		;(async () => {
			const module = await import('@simonwep/pickr')
			const Pickr = module.default

			if (pickerDiv && !pickerInstance) {
				pickerInstance = Pickr.create({
					el: pickerDiv,
					theme: 'classic',
					useAsButton: true,
					inline: true,
					showAlways: true,
					default: $pickedColor,
					components: {
						preview: false,
						hue: true,
						interaction: {
							hex: true,
							rgba: true,
							hsla: true,
							// hsva: true,
							cmyk: true,
							input: true,
						},
					},
				})

				pickerInstance.on('change', (color: any) => {
					pickedColor.set(color.toHEXA().toString())
				})
			}
		})()

		return () => {
			if (pickerInstance) {
				pickerInstance.destroy()
			}
		}
	})
</script>

<div class="mx-auto" bind:this={pickerDiv} />
