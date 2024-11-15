<script>
    import {FillExtrusionLayer, GeoJSON, Popup} from "svelte-maplibre";
    import {statesData} from "$lib/usa-map/utils/usa-map-utils";
    import MapLibreWrapper from "$lib/map-libre/components/MapLibreWrapper.svelte";
    import UsPopUpCard from "$lib/usa-map/components/UsPopUpCard.svelte";
</script>

<MapLibreWrapper center={[-98.137, 38.137]} zoom="4" pitch="20">
    <GeoJSON data={statesData}>
        <FillExtrusionLayer
                paint={{
                    'fill-extrusion-color': [
                      'interpolate',
                      ['linear'],
                      ['get', 'density'],
                          0, 'rgb(255,255,178)',
                          50, 'rgba(173,221,142,0.84)',
                          100, 'rgba(120,198,121,0.75)',
                          150, 'rgba(49,163,84,0.73)',
                          200, 'rgba(252,141,89,0.8)',
                          300, 'rgba(215,48,39,0.87)'
                    ],
                    'fill-extrusion-opacity': 0.9,
                  }}
                beforeLayerType="symbol">
            <Popup openOn="hover" let:data>
                <UsPopUpCard {data}/>
            </Popup>
        </FillExtrusionLayer>
    </GeoJSON>
</MapLibreWrapper>