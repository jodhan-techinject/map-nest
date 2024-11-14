<script>
    import "../app.css";
    import Header from "$lib/common/components/Header.svelte";
    import Footer from "$lib/common/components/Footer.svelte";
</script>


<div class="bg-primary-400 h-[100vh]">
    <Header/>
    <slot/>
    <Footer/>
</div>
