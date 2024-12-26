<script>
	import LucideIcon from '$lib/LucideIcon.svelte';
	import Flag from '$lib/Flag.svelte';
	import { page, footer, flags, pronouns, names, tags } from '$lib/info.json';
	import flagDefinitions from '$lib/flags.json';
	const colorVariants = {
		pink: {
			'bg': 'bg-pink-500',
			'gradient': 'from-pink-100 to-pink-50'
		},
		blue: {
			'bg': 'bg-blue-500',
			'gradient': 'from-blue-100 to-blue-50'
		},
		green: {
			'bg': 'bg-green-500',
			'gradient': 'from-green-100 to-green-50'
		},
		red: {
			'bg': 'bg-red-500',
			'gradient': 'from-red-100 to-red-50'
		},
		purple: {
			'bg': 'bg-purple-500',
			'gradient': 'from-purple-100 to-purple-50'
		},
		slate: {
			'bg': 'bg-slate-500',
			'gradient': 'from-slate-100 to-slate-50'
		}
	}
</script>

<svelte:head>
	<title>{page.header}</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-b {colorVariants[page.color].gradient} flex sm:items-center justify-center sm:p-4">
	<div class="w-full sm:max-w-md bg-white shadow-2xl sm:rounded-xl overflow-hidden bg-gradient-to-b {colorVariants[page.color].gradient} sm:bg-none">
		<div class="{colorVariants[page.color].bg} text-white p-6 shadow-md">
			<h1 class="text-2xl font-bold text-center">{page.header}</h1>
			<p class="text-center text-md font-light mt-2">{page.subtitle}</p>
			<div class="flex gap-2 justify-center mt-4">
				{#each flags as flag}
					<Flag colors={flagDefinitions[flag].colors} name={flagDefinitions[flag].display}/>
				{/each}
			</div>
		</div>
		
		<div class="divide-y divide-gray-100">
			<section class="p-6">
				<h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
					<LucideIcon name="User"/>
					Pronouns
				</h2>
				<div class="space-y-3">
					{#each Object.entries(pronouns) as [pronoun, tag]}
						<div class="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
							<LucideIcon 
								name={tags[tag].icon}
							/>
							<span class="text-gray-700 font-medium">{pronoun}</span>
							<span class="ml-auto text-sm text-gray-500 capitalize">
								{tags[tag].display}
							</span>
						</div>
					{/each}
				</div>
			</section>
			
			<section class="p-6">
				<h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
					<LucideIcon name="Tag" />
					Names
				</h2>
				<div class="space-y-3">
					{#each Object.entries(names) as [name, tag]}
						<div class="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
							<LucideIcon 
								name={tags[tag].icon}
							/>
							<span class="text-gray-700 font-medium">{name}</span>
							<span class="ml-auto text-sm text-gray-500 capitalize">
								{tags[tag].display}
							</span>
						</div>
					{/each}
				</div>
			</section>
		</div>
		<footer class="p-4 bg-gray-50 divide-y divide-gray-100">
			{#each footer as item}
				<div class="flex items-center justify-center gap-1 py-0.5">
					<LucideIcon name={item.icon} small />
					<a href={item.url} class="block text-center text-gray-500 hover:text-gray-700 text-xs">{item.text}</a>
				</div>
			{/each}
		</footer>
	</div>
</main>

<style>
	/* Optional: Add any custom styles here */
</style>