<script>
    import {homePageTiles} from "$lib/home-page/utils/homepage-utils";
    import HomeCard from "$lib/home-page/components/HomeCard.svelte";
    import {darkMode} from "$lib/common/utils/store";
</script>

<div class="flex py-[10%] md:flex-row flex-col justify-center items-center {$darkMode ? 'bg-primary-400' : ' bg-primary-50'}">
    {#each homePageTiles as tile}
        <HomeCard {tile}/>
    {/each}
</div>