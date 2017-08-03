
	function buscar(){
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(functionExito, functionError);
		}
	}

	document.getElementById("encontrar").addEventListener("click", buscar);
    var latitude, longitude;
    var functionExito = function(posicion) {
    	latitude = posicion.coords.latitude;
    	longitude = posicion.coords.longitude;

    	console.log(latitude);
		console.log(longitude);

    	var miUbicacion = new google.maps.Marker({
    		position: {lat:latitud, lng:longitud},
    	
    		map: map
    	});
    	
    }
   var functionError = function (error) {
	alert("tenemos un problema con encontrar tu ubicación");
	}
} 

function prediccion(latitude, longitude) {
    //configuracion de las variables para coordenadas, url y clave api
  
  var apiKey       = '34cc24df01b840744bde5587956e7be8',
      url          = 'https://api.darksky.net/forecast/',
      lati         = latitude,
      longi        = longitude,
      api_call     = url + apiKey + "/" + lati + "," + longi + "?extend=hourly&callback=?";
		
		$.ajax({
            url: api_call,
            type: 'GET',
            datatype: 'JSON',
        })

  // dias posibles en un array
  var days = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado'
  ];
  	response.forEach(function(getTemp){
			var Tmax = getTemp.apparentTemperatureMax;
			var Tmin = getTemp.apparentTemperatureMin;
  			.done(function(response) {
			            console.log(response);
			            //currently = actualmente index.html
			            $('#forecast').append(
			            	'<li class="shade-'+ skicons +'"><div class="card-container"><div><div class="front card"><div>' +
          					"<div class='graphic'><canvas class=" + skicons + "></canvas></div>" +
          					"<div><b>Day</b>: " + date.toLocaleDateString() + "</div>" +
					        "<div><b>Temperature</b>: " + response.currently.temperature + "</div>" +
					        "<div><b>Max Temp:</b>: " + Tmax + "</div>" +
					        "<div><b>Min Temp:</b>: " + Tmin + "</div>" +
					        "<div><b>Humedad:</b>: " + response.currently.humidity + "</div>" + 
					        '</div></div><div class="back card">' +
					       '<div class=" + day + "></div></div></div></div></li>'
            .always(function() {
            console.log('complete')
        });
			            
  }


/*function skycons() {
        var i,
            icons = new Skycons({
                "color" : "#FFFFFF",
                "resizeClear": true
            }),
            list  = [ // posibles pronosticos
                "clear-day",
                "clear-night",
                "partly-cloudy-day",
                "partly-cloudy-night",
                "cloudy",
                "rain",
                "sleet",
                "snow",
                "wind",
                "fog"
            ];
 
    for(i = list.length; i--;) {
        var weatherType = list[i], // select each icon from list array
                // icons will have the name in the array above attached to the 
                // canvas element as a class so let's hook into them.
                elements    = document.getElementsByClassName( weatherType );
 
       
        for (e = elements.length; e--;) {
            icons.set(elements[e], weatherType);
        }
    }
     
    // animate the icons
    icons.play();
} 

*/
