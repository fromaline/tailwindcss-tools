<script lang="ts">
	import { page } from '$app/stores'
	import { Button } from '$lib/components/ui/button'
</script>

<section
	class="mx-auto flex max-w-[980px] flex-[1] flex-col items-center justify-center gap-2 px-3 py-8 pb-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20"
>
	<h1
		class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
	>
		{$page.status}
	</h1>

	{#if $page.error?.message}
		<h2 class="text-balance text-muted-foreground max-w-[750px] text-center text-lg sm:text-xl">
			{$page.error.message}
		</h2>
	{/if}

	<div class="mt-4">
		<Button href="/">Go Back Home</Button>
	</div>
</section>
