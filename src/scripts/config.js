require.config({
    baseUrl: '/scripts/lib',

    urlArgs: 'v1',

    paths: {
        app: '../app',
        map: '../map',

        'google-map': '//maps.googleapis.com/maps/api/js?key=AIzaSyADSl0rH0HspdbfVn2aSV1NBliyoruVPrE&callback=initMap',

        jquery: 'jquery/dist/jquery.min',
        slick: 'slick-carousel/slick/slick.min'
    },
    deps: ['app']
});
