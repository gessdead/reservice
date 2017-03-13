define('app', [
    'jquery'
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
                slidesToScroll: 1
            });
        });
    })($('.j-gallery'));

    return {};
});
