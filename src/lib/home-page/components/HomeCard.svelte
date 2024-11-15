<script lang="ts">
    import type {HomeTile} from "$lib/home-page/models/HomeTile";
    import {goto} from "$app/navigation";
    import {darkMode} from "$lib/common/utils/store";

    export let tile: HomeTile;
</script>

<button on:click={()=>{goto(tile.link)}}
        class=" {$darkMode ? 'text-white' : 'text-black'} h-[25rem] w-[80%] md:w-[20%] hover:brightness-105 transition-all cursor-pointer group bg-gradient-to-tl from-white to-gray-100 text-start hover:from-gray-50 hover:to-blue-100  m-4 bg-primary-400 overflow-hidden relative shadow-md"
>
    <div class="h-full w-full bg-cover bg-center absolute z-[10] top-0 group-hover:scale-110 transition-all ease-in-out duration-500"
         style="background-image: url({tile.image})"></div>
    <div class="h-full w-full  {$darkMode ? 'bg-black/80' : 'bg-white/70'} absolute z-[20] top-0"></div>
    <div class="px-8 py-10 h-full flex justify-between flex-col z-[30] absolute top-0">
        <div>
            <div class="bg-primary-300 w-10 h-10 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-md group-hover:shadow-primary-200 transition-all"></div>
            <div class="uppercase font-bold text-xl">
                {tile.title}
            </div>
        </div>
        <div class=" {$darkMode ? 'text-gray-400' : 'text-gray-900'} mt-8">
            {tile.desc}
        </div>
    </div>

    <div class="z-[30] h-3 bottom-0 w-full bg-gradient-to-l via-primary-300 group-hover:blur-2xl blur-2xl m-auto rounded transition-all absolute "></div>
    <div class=" absolute z-[30] top-0 h-0.5 group-hover:w-full bg-gradient-to-l via-primary-300 group-hover:via-primary-300 w-[0%] m-auto rounded transition-all"></div>
</button>
