<script>
    let { colors, name } = $props();
</script>

<div class="relative group">
    <div class="flex flex-col aspect-[5/3] w-12 rounded-sm overflow-hidden shadow-sm shadow-black/50">
        {#each colors as color}
            <div style="background-color: {color}" class="flex-1"></div>
        {/each}
    </div>
    <!-- tooltip -->
    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-1 
                invisible group-hover:visible opacity-0 group-hover:opacity-100
                transition-opacity duration-200 ease-in-out
                bg-slate-800 text-slate-50 px-2 py-1 rounded text-sm whitespace-nowrap">
        <span>{name}</span>
    </div>
</div>