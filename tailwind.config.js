/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    400: '#151515',
                    300: '#A91D3A',
                    200: '#C73659',
                    100: '#EEEEEE',
                    50:'#B7B7B7'
                },
            }
        }
    },
    plugins: [],
}

