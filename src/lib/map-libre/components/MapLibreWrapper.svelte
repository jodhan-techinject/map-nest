<script lang="ts">
    import {MapLibre} from "svelte-maplibre";

    export let center: [number, number] = [76.4711, 9.8505]
    export let mapClasses: string = 'w-full h-full'
    export let mapStyle: string = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
</script>

<MapLibre
        style={mapStyle}
        class={mapClasses}
        standardControls
        zoom={7.5}
        center={center}
>
    <slot/>
</MapLibre>