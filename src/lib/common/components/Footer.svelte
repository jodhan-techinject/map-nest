<script>
    import {darkMode} from "$lib/common/utils/store";
    const currentYear = new Date().getFullYear()
</script>

<footer class="h-[3rem] mt-auto fixed bottom-0 w-full {$darkMode ? 'bg-black' : ' bg-primary-100'} z-[50]">
    <div class="container mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
        <p class="text-sm {$darkMode ? 'text-primary-100' : ' text-primary-400'}"><span class="text-primary-300 text-lg">&copy;</span> {currentYear} Maps App. All rights reserved.</p>
    </div>
</footer>