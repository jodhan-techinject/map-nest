<script>
    import {DefaultMarker, Popup} from "svelte-maplibre";
    import {keralaHistoricMarkers} from "$lib/kerala-map/utils/kerala-map-utils";
    import MapLibreWrapper from "$lib/map-libre/components/MapLibreWrapper.svelte";

</script>

<MapLibreWrapper>
    {#each keralaHistoricMarkers as {lngLat, name, description, image}}
        <DefaultMarker {lngLat}>
            <Popup offset={[0, -10]}>
                <div class="p-2 rounded">
                    <p class="text-2xl font-bold">{name}</p>
                    <p class="pt-2 text-md">{description}</p>
                    <img alt="{name}" src={image} class="w-full h-[15rem] pt-2"/>
                </div>
            </Popup>
        </DefaultMarker>
    {/each}
</MapLibreWrapper>
