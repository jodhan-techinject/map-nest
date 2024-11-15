<script>
    import "../app.css";
    import Header from "$lib/common/components/Header.svelte";
    import { darkMode } from "$lib/common/utils/store";
</script>


<div class="{$darkMode ? 'bg-primary-400' : ' bg-primary-50'} h-[100vh] ">
    <Header/>
    <slot/>
</div>
