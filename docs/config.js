var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiZGhoaGVlZWUiLCJhIjoiY2x3YzRmMm1qMHRzMzJpcnNjeGtnNWFyayJ9.7kNKP3vZsSjyMC2FjjpOkg',
    accessToken: 'your_mapbox_access_token_here',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    title: 'Scrollytelling with Mapbox and Plotly',
    subtitle: 'An example of integrating Plotly plots into a scrollytelling narrative.',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-0',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 1',
            description: 'Description for the map and plot 1.',
            location: {
                center: [-74.50, 40],
                zoom: 9,
                pitch: 45,
                bearing: -40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 2',
            description: 'Description for plot 2.',
            location: {
                center: [-74.50, 40],
                zoom: 9,
                pitch: 45,
                bearing: -40
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'Chapter 3',
            description: 'Description for plot 3.',
            location: {
                center: [-74.50, 40],
                zoom: 9,
                pitch: 45,
                bearing: -40
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};