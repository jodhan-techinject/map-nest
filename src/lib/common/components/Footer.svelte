<script>
    import {darkMode} from "$lib/common/utils/store";
    const currentYear = new Date().getFullYear()
</script>

<footer class="mt-auto fixed bottom-0 w-full z-[50] md:block hidden">
    <div class="container mx-auto px-4 pb-5 flex flex-col sm:flex-row items-center justify-between">
        <p class="text-sm {$darkMode ? 'text-primary-100' : ' text-primary-400'}"><span class="text-primary-300 text-lg">&copy;</span> {currentYear} Maps App. All rights reserved.</p>
    </div>
</footer>