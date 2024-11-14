<script>
    import {homePageTiles} from "$lib/home-page/utils/homepage-utils";
    import HomeCard from "$lib/home-page/components/HomeCard.svelte";
</script>

<div class="flex py-[10%] md:flex-row flex-col justify-center items-center bg-primary-400">
    {#each homePageTiles as tile}
        <HomeCard {tile}/>
    {/each}
</div>