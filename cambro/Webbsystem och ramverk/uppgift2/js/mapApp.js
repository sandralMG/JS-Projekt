/**
 * App for navigating a food market
 * Author: 
 *
 * @requires jQuery
 * @version 0.0.1
 */
var MapApp = (function () {
    // Properties
    var i = 0;

    var initLat = 59.31444201760934,
        initLon = 18.070905804634094;

    // Methods
    function init() {
        // Application init code


        var tileLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors'
        });


        var map = new L.Map('map', {
            'center': [initLat, initLon],
            'zoom': 25,
            'layers': [tileLayer]
        });

        var marker = L.marker([initLat, initLon], {
            draggable: true
        }).addTo(map);
    }

    return {
        init: init
    };

})();

MapApp.init(); // Run application