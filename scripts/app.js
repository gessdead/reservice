define("app",["jquery"],function(e){return function(t){if(t.length){var l=t,o=e(".service__content");l.on("click",function(t){var s=e(this),i=s.index();t.preventDefault(),s.hasClass("is-active")||(l.removeClass("is-active"),s.addClass("is-active"),o.hide(),o.eq(i).fadeIn())})}}(e(".j-service-tab")),function(e){e&&require(["slick"],function(){e.slick({slidesToShow:2,slidesToScroll:2})})}(e(".j-gallery")),function(e){if(e){var t={lat:59.909159,lng:30.362514},l=document.getElementById("map"),o={zoom:15,center:t,styles:[{featureType:"water",stylers:[{saturation:43},{lightness:-11},{hue:"#0088ff"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#ff0000"},{saturation:-100},{lightness:99}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#808080"},{lightness:54}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ece2d9"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#ccdca1"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#767676"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#b8cb93"}]},{featureType:"poi.park",stylers:[{visibility:"on"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"on"}]},{featureType:"poi.medical",stylers:[{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"simplified"}]}],mapTypeControl:!1,scrollwheel:!1},s=new google.maps.Map(l,o);new google.maps.Marker({position:t,map:s})}}(e(".j-map")),function(t){t&&t.on("click",function(){console.log("yep"),elem=e(this).attr("href"),console.log(elem),dest=e(elem).offset().top-30,console.log(dest),e("body").animate({scrollTop:dest},1e3)})}(e(".j-nav")),function(e){e&&require(["magnific-popup"],function(){e.magnificPopup()})}(e(".j-popup")),function(t){t&&t.on("click",function(){e(".j-form").hide(),e(".j-form-success").show()})}(e(".j-form-btn")),{}});