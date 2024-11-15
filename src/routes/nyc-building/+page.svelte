<script>
    import {FillExtrusionLayer} from "svelte-maplibre";
    import MapLibreWrapper from "$lib/map-libre/components/MapLibreWrapper.svelte";
</script>

<MapLibreWrapper center={[-74.0066, 40.7135]} darkMapStyle={false} zoom={15.5} pitch={45}>

    <FillExtrusionLayer
            source="maptiler_planet"
            sourceLayer="building"
            minzoom={14}
    />
</MapLibreWrapper>
