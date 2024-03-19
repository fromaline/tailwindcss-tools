<script lang="ts">
	import * as Card from '$lib/components/ui/card'
	import { Button } from '$lib/components/ui/button'
</script>

<section
	class="mx-auto flex max-w-[980px] flex-[1] flex-col items-center gap-2 px-3 py-8 pb-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
>
	<h1
		class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
	>
		TailwindTools
	</h1>

	<h2 class="text-balance text-muted-foreground max-w-[750px] text-center text-lg sm:text-xl">
		A set of handy tools for Tailwind CSS
	</h2>

	<div class="mt-10">
		<Card.Root class="max-w-[500px]">
			<Card.Header>
				<Card.Title>Find The Nearest Tailwind CSS Color</Card.Title>
			</Card.Header>
			<Card.Content>
				<p>
					Imagine you building a website using tailwindcss. Tailwind is a solid CSS framework, so
					things go great. You create components, style, and color them as you want, but now you
					want to add this new color to make your design stand out. Wait, will it play well with all
					other colors from the Tailwind palette? You're not sure, neither am I. That's why I
					created this tool. <br /><br />
					It allows you to bring your custom color and find the closest color from the Tailwind CSS palette.
					It makes things so much easier because you can just use a similar color from the original Tailwind
					CSS palette.
				</p>
			</Card.Content>
			<Card.Footer>
				<Button href="/nearest-tailwind-color" class="w-full">Try It Out!</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</section>
