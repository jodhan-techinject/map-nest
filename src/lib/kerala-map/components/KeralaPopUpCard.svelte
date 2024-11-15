<script lang="ts">
    export let marker;
</script>

<div class="p-1 rounded w-[18rem]">
    <p class="text-xl font-bold">{marker.name}</p>
    <p class="pt-2 text-md">{marker.description}</p>
    <img alt="{marker.name}" src={marker.image} class="w-full  h-[10rem] pt-2"/>
</div>