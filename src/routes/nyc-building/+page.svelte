<script>
    import {FillExtrusionLayer} from "svelte-maplibre";
    import MapLibreWrapper from "$lib/map-libre/components/MapLibreWrapper.svelte";
</script>

<MapLibreWrapper center={[-74.0066, 40.7135]} darkMapStyle={false} zoom={15.5} pitch={45}>

    <FillExtrusionLayer
            source="maptiler_planet"
            sourceLayer="building"
            beforeLayerType={(l) => l.type === 'symbol' && !!l.paint?.['text-color']}
            minzoom={14}
            paint={{
              'fill-extrusion-color': [
                'interpolate',
                ['linear'],
                ['get', 'render_height'],
                0,
                '#0a0',
                70,
                '#a00',
              ],
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                14,
                0,
                14.05,
                ['get', 'render_height'],
              ],

              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                14,
                0,
                14.05,
                ['get', 'render_min_height'],
              ],

              'fill-extrusion-opacity': 0.9,
            }}
    />
</MapLibreWrapper>
