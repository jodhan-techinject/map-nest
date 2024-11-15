import type {HomeTile} from "$lib/home-page/models/HomeTile";

export let homePageTiles: HomeTile[] = [
    {
        title: 'Historical Landmarks of Kerala',
        desc: 'Explore Kerala\'s rich history through our map of historical landmarks. Each location reveals the stories and architecture that shaped Kerala\'s past.',
        image: '/images/home-tiles/historical-place-kerala.jpeg',
        link: '/kerala'
    }, {
        title: 'Population Density of USA',
        desc: 'Explore the population distribution across the United States with our interactive density map',
        image: '/images/home-tiles/usa-population.jpeg',
        link: '/usa'
    }, {
        title: 'Locate Your Area',
        desc: 'Explore popular spots and events happening around your area.',
        image: '/images/home-tiles/my-loaction.webp',
        link: '/nyc-building'
    },
]