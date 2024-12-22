<script>
	import * as icons from 'lucide-svelte';
	let { name } = $props();

	const Icon = icons[name];
</script>

<Icon />