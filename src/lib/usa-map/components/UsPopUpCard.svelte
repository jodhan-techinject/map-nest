<script>
    export let data;
    $:props= data?.properties
</script>

{#if props}
    <div class="flex flex-col gap-2">
        <div class="text-lg font-bold">{props.name}</div>
        <p>Density: {props.density}</p>
    </div>
{/if}