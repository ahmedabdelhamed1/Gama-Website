/*------------------------------------------------------------------
[Table of contents]

- Map

- Project:	Futurico - Multipurpose HTML Template
- Version:	1.1
- Author:  Andrey Sokoltsov
- Profile:	http://themeforest.net/user/andreysokoltsov
--*/


// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 16,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(21.557744, 39.180991), // New York

                    scrollwheel: false,
					

                };

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var image = {
                    url: 'images/marker.png', // url
                    //scaledSize: new google.maps.Size(0,0), // scaled size
                    origin: new google.maps.Point(0,0), // origin
                    anchor: new google.maps.Point(20, 40) // anchor
                };
				
				var contentString = '';

				var infowindow = new google.maps.InfoWindow({
				  content: contentString
				});

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(21.557744, 39.180991),
                    map: map,
                    title: 'GAMA Ltd',
                    icon: image,
					url: 'https://goo.gl/maps/SANMznsM9EYn8jdH6'
                });
				
				google.maps.event.addListener(marker, 'click', function() {
						window.open(this.url, '_blank');
					});
				 google.maps.event.addListener(marker, 'mouseover', function () {
					infowindow.setContent(this.title);
					infowindow.open(map, this);
				});
				
				
            }