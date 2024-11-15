<script>
    import {FillExtrusionLayer, GeoJSON, Popup} from "svelte-maplibre";
    import {statesData} from "$lib/usa-map/utils/usa-map-utils";
    import MapLibreWrapper from "$lib/map-libre/components/MapLibreWrapper.svelte";
    import UsPopUpCard from "$lib/usa-map/components/UsPopUpCard.svelte";
    import {darkMode} from "$lib/common/utils/store";
</script>

<MapLibreWrapper center={[-98.137, 38.137]} darkMapStyle={$darkMode} zoom="4" pitch="20">
    <GeoJSON data={statesData}>
        <FillExtrusionLayer
                paint={{
                    'fill-extrusion-color': [
                      'interpolate',
                      ['linear'],
                      ['get', 'density'],
                          0, 'rgba(251,251,55,0.65)',
                          50, 'rgba(160,232,114,0.71)',
                          100, 'rgba(99,223,101,0.83)',
                          150, 'rgba(57,194,99,0.85)',
                          200, 'rgba(235,117,62,0.82)',
                          300, 'rgba(215,48,39,0.82)'
                    ],
                    'fill-extrusion-opacity': 0.6,
                  }}
                beforeLayerType="symbol">
            <Popup openOn="hover" let:data>
                <UsPopUpCard {data}/>
            </Popup>
        </FillExtrusionLayer>
    </GeoJSON>
</MapLibreWrapper>