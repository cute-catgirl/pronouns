<script>
    let { colors } = $props();
</script>
<div class="flex flex-col aspect-[5/3] w-12 rounded-sm overflow-hidden shadow-sm shadow-black/50">
    {#each colors as color}
        <div style="background-color: {color}" class="flex-1"></div>
    {/each}
</div>