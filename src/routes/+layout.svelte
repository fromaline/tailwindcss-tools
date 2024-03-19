<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags'
	import { page } from '$app/stores'
	import '@simonwep/pickr/dist/themes/classic.min.css'
	import logo from '$lib/assets/logo.svg'
	import '../app.css'
</script>

<MetaTags
	title={$page.data.seoTags?.title ??
		'TailwindTools — a Set of Handy Tools for Tailwind CSS [for 2024]'}
	description={$page.data.seoTags?.description ?? 'TailwindTools — a set of tools for tailwind css'}
	canonical={$page.data.seoTags?.canonical ?? 'https://tailwindtools.xyz/'}
	openGraph={{
		url: $page.data.seoTags?.canonical ?? 'https://tailwindtools.xyz/',
		title:
			$page.data.seoTags?.title ??
			'TailwindTools — a Set of Handy Tools for Tailwind CSS [for 2024]',
		description:
			$page.data.seoTags?.description ?? 'TailwindTools — a set of tools for tailwind css',
		type: $page.data.seoTags?.type ?? 'website',
		images: [
			{
				url: $page.data.seoTags?.image ?? 'https://tailwindtools.xyz/og.png',
				width: 1200,
				height: 630,
				alt: $page.data.seoTags?.imageAlt ?? 'TailwindTools Preview Image',
			},
		],
		siteName: 'TailwindTools',
	}}
	twitter={{
		cardType: 'summary_large_image',
		title:
			$page.data.seoTags?.title ??
			'TailwindTools — a Set of Handy Tools for Tailwind CSS [for 2024]',
		description:
			$page.data.seoTags?.description ?? 'TailwindTools — a set of tools for tailwind css',
		image: $page.data.seoTags?.image ?? 'https://tailwindtools.xyz/og.png',
		imageAlt: $page.data.seoTags?.imageAlt ?? 'Chainspect Preview Image',
	}}
/>

<header
	class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
>
	<div class="container flex h-14 max-w-screen-2xl items-center justify-between gap-4">
		<div class="flex items-center justify-start gap-3 sm:gap-6">
			<a
				href="/"
				class="flex items-center justify-start gap-1.5 text-sm font-bold sm:gap-2 sm:text-base"
			>
				<img src={logo} alt="TailwindTools Logo" width="20" height="20" class="h-5 w-5" />

				<span>TailwindTools</span>
			</a>

			<nav class="text-sm">
				<ul class="flex items-center gap-2 sm:gap-6">
					<li>
						<a
							href="/nearest-tailwind-color"
							class="{$page.url.pathname === '/nearest-tailwind-color'
								? 'text-foreground'
								: 'text-foreground/60'} hover:text-foreground/80 transition-colors"
						>
							Nearest Color
						</a>
					</li>
					<li>
						<a
							href="https://github.com/fromaline/tailwindtools"
							target="_blank"
							rel="noopener noreferrer"
							class="text-foreground/60 hover:text-foreground/80 transition-colors"
						>
							GitHub
						</a>
					</li>
				</ul>
			</nav>
		</div>

		<a
			href="https://github.com/fromaline/tailwindtools"
			target="_blank"
			title="TailwindTools GitHub link"
			class="outline-none hover:text-white focus-visible:text-white"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				width="24"
				height="24"
				class="sm:h-6 sm:w-6"
				><path
					d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
				></path></svg
			>
		</a>
	</div>
</header>

<main class="flex flex-[1] flex-col">
	<slot />
</main>

<footer class="py-4 md:py-0">
	<div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
		<p class="text-muted-foreground text-center text-xs leading-loose sm:text-sm md:text-left">
			Built by <a
				href="https://twitter.com/fromaline"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium underline underline-offset-4">fromaline</a
			>. The source code is available on
			<a
				href="https://github.com/fromaline/tailwindtools"
				target="_blank"
				rel="noopener noreferrer"
				class="font-medium underline underline-offset-4">GitHub</a
			>.
		</p>
	</div>
</footer>
