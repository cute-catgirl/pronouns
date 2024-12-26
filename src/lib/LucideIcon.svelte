<script>
	import * as icons from 'lucide-svelte';
	let { name, small = false } = $props();

	// svelte-ignore non_reactive_update
	let Icon = icons[name];

	if (Icon === undefined) {
		console.error(`Icon "${name}" not found`);
		Icon = icons["HelpCircle"];
	}
</script>

{#if Icon !== undefined}
	<Icon class={small ? 'w-4 h-4' : ''}/>
{/if}