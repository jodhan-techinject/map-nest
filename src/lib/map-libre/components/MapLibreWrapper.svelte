<script lang="ts">
    import {MapLibre} from "svelte-maplibre";
    import {darkMode} from "$lib/common/utils/store";

    const mapTilerApiKey = import.meta.env.VITE_MAPTILER_API;

    export let center: [number, number] = [76.4711, 9.8505]
    export let mapClasses: string = '!w-full !h-[calc(100vh-4rem)]'
    export let zoom: number = 7.5
    export let pitch: number = 0
    export let darkMapStyle: boolean = true


</script>

<MapLibre
        pitch={pitch}
        style={darkMapStyle ? 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json' : `https://api.maptiler.com/maps/${$darkMode ? 'streets-dark' : 'streets'}/style.json?key=${mapTilerApiKey}`}
        class={mapClasses}
        standardControls
        zoom={zoom}
        center={center}
>
    <slot/>
</MapLibre>