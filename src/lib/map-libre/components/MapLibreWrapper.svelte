<script lang="ts">
    import {MapLibre} from "svelte-maplibre";

    export let center: [number, number] = [76.4711, 9.8505]
    export let mapClasses: string = '!w-full !h-full'
    // export let mapStyle: string = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
    export let mapStyle: string = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    export let zoom: number = 7.5
    export let pitch: number = 0
</script>

<MapLibre
        pitch={pitch}
        style={mapStyle}
        class={mapClasses}
        standardControls
        zoom={zoom}
        center={center}
>
    <slot/>
</MapLibre>