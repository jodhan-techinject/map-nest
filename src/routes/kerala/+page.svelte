<script>
    import {DefaultMarker, Popup} from "svelte-maplibre";
    import {darkMode} from "$lib/common/utils/store";
    import {keralaHistoricMarkers} from "$lib/kerala-map/utils/kerala-map-utils";
    import MapLibreWrapper from "$lib/map-libre/components/MapLibreWrapper.svelte";
    import KeralaPopUpCard from "$lib/kerala-map/components/KeralaPopUpCard.svelte";

</script>

<MapLibreWrapper darkMapStyle={$darkMode}>
    {#each keralaHistoricMarkers as marker}
        <DefaultMarker lngLat={marker.lngLat}>
            <Popup offset={[0, -10]}>
                <KeralaPopUpCard {marker} />
            </Popup>
        </DefaultMarker>
    {/each}
</MapLibreWrapper>
