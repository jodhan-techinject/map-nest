<script>
    import {homePageTiles} from "$lib/home-page/utils/homepage-utils";
    import HomeCard from "$lib/home-page/components/HomeCard.svelte";
    import {darkMode} from "$lib/common/utils/store";
    import Footer from "$lib/common/components/Footer.svelte";
</script>

<div class="flex pt-[5%] pb-[5%] md:flex-row flex-col justify-center items-center {$darkMode ? 'bg-primary-400' : ' bg-primary-50'}">
    {#each homePageTiles as tile}
        <HomeCard {tile}/>
    {/each}
</div>

<Footer/>