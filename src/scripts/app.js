define('app', [
    'jquery',

], function ($) {

    // service tabs
    (function($serviceTab) {
        if (!$serviceTab.length) {
            return;
        }

        var $link = $serviceTab; //ссылка
        var $tab = $('.service__content'); //контент

        $link.on('click', function(e) {
            var $self = $(this);
            var index = $self.index();

            e.preventDefault();

            if (!$self.hasClass('is-active')) {
                $link.removeClass('is-active');
                $self.addClass('is-active');
                $tab.hide();
                $tab.eq(index).fadeIn();
            }

        });
    })($('.j-service-tab'));

    //gallery
    (function ($gallery) {
        if (!$gallery) {
            return
        }

        require(['slick'], function () {
            $gallery.slick({
                slidesToShow: 2,
                slidesToScroll: 2
            });
        });
    })($('.j-gallery'));

    (function ($map) {
        if (!$map) {
            return;
        }

        var myLatLng = {lat: 59.9091590, lng: 30.3625140};

        var elem = document.getElementById('map');

        var options = {
            zoom: 15,
            center: myLatLng,
            styles: [{
                "featureType": "water",
                "stylers": [{"saturation": 43}, {"lightness": -11}, {"hue": "#0088ff"}]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{"hue": "#ff0000"}, {"saturation": -100}, {"lightness": 99}]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#808080"}, {"lightness": 54}]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ece2d9"}]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ccdca1"}]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#767676"}]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#ffffff"}]
            }, {"featureType": "poi", "stylers": [{"visibility": "off"}]}, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{"visibility": "on"}, {"color": "#b8cb93"}]
            }, {
                "featureType": "poi.park",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "poi.sports_complex",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "poi.medical",
                "stylers": [{"visibility": "on"}]
            }, {"featureType": "poi.business", "stylers": [{"visibility": "simplified"}]}],
            //zoomControl: false,
            mapTypeControl: false,
            scrollwheel: false
        };

        var map = new google.maps.Map(elem, options);

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map
            //icon: '/images/map-marker.png'
        });
    })($('.j-map'));

    (function ($easyScroll) {
        if (!$easyScroll) {
            return;
        }

        $easyScroll.on('click', function () {
            console.log('yep');
            elem = $(this).attr('href');
            console.log(elem);
            dest = $(elem).offset().top - 30;
            console.log(dest);
            $('body').animate({
                scrollTop: dest
            }, 1000);
        });

    })($('.j-nav'));

    (function ($popup) {
        if (!$popup) {
            return;
        }

        require(['magnific-popup'], function () {
            $popup.magnificPopup();
        });
    })($('.j-popup'));

    (function ($form) {
        if (!$form) {
            return;
        }

        $form.on('click', function () {
           $('.j-form').hide();
           $('.j-form-success').show();
        });

    })($('.j-form-btn'));

    return {};
});
