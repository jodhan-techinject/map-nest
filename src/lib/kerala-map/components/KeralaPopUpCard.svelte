<script lang="ts">
    export let marker;
</script>

<div class="p-2 rounded">
    <p class="text-2xl font-bold">{marker.name}</p>
    <p class="pt-2 text-md">{marker.description}</p>
    <img alt="{marker.name}" src={marker.image} class="w-full h-[15rem] pt-2"/>
</div>