import type {HomeTile} from "$lib/home-page/models/HomeTile";

export let homePageTiles: HomeTile[] = [
    {
        title: 'Historical Landmarks of Kerala',
        desc: 'Explore Kerala\'s rich history through our map of historical landmarks. Each location reveals the stories and architecture that shaped Kerala\'s past.',
        image: '/images/home-tiles/historical-place-kerala.jpeg',
        icon : '/images/home-tiles/flag-banner-fold.svg',
        link: '/kerala',
    }, {
        title: 'Population Density of USA',
        desc: 'Explore the population distribution across the United States with our interactive density map',
        image: '/images/home-tiles/usa-population.jpeg',
        icon : '/images/home-tiles/users-three.svg',
        link: '/usa'
    }, {
        title: '3D Buildings in New York',
        desc: 'This interactive 3D map showcases the buildings in New York City, giving users a unique perspective on the city\'s architecture. ',
        image: '/images/home-tiles/nyc-buildings.webp',
        icon : '/images/home-tiles/buildings.svg',
        link: '/nyc-building'
    },
]