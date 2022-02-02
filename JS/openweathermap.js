function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = month + ' ' + date + ' ' + year;
    return time;
}

mapboxgl.accessToken = mapbox_maps_key;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

function getWeather(lat, lng) {
    $("#weather").empty()
    $.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&exclude={part}&appid=${weathermap_key}`).done(function (data) {
        console.log(data)
        for (var i = 0; i <= 4; i++) {
            let date = timeConverter(data.daily[i].dt);
            let chanceOfRain = Math.round(data.daily[i].pop * 100);
            let weatherEntry = `<div class="col card mx-3" id="day-weather">
                                    <div class="card-header">${date}</div>
                                    <img id="weather-icon" src="https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png" alt="">
                                    <div class="card-title">${data.daily[i].weather[0].description}</div>
                                    <div class="card-text">Low: ${data.daily[i].temp.min} / High: ${data.daily[i].temp.max}</div>
                                    <div class="card-text">Chance Of Rain: ${chanceOfRain}%</div>
                                    <div class="card-text">Humidity: ${data.daily[i].humidity}%</div>
                                </div>`
            $("#weather").append(weatherEntry);
        }
        reverseGeocode({lng:lng, lat:lat}, mapboxgl.accessToken).then(function(result){
            $("#weather-location").empty()
            $("#weather-location").append(result)
        });
        $("#coordinates").remove()
        $(".mapboxgl-canvas-container").append(`<div id="coordinates">Longitude: ${lng}<br />Latitude: ${lat}</div>`)
    });
};

getWeather(29.4241, -98.4936);

$(".mapboxgl-canvas").click(function() {
    $(".mapboxgl-marker").remove()
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);
        map.setCenter([-98.4916, 29.4252])
        map.setZoom(10)

    function onDragEnd() {
        const lngLat = marker.getLngLat();
        console.log(lngLat)
        getWeather(lngLat.lat, lngLat.lng)
    };

    marker.on('dragend', onDragEnd);
});


$("#submit").click(function () {
    console.log("clicked")
    $(".mapboxgl-marker").remove()
    var searchValue = $("#search-city").val()
    console.log(searchValue)
    geocode(searchValue, mapboxgl.accessToken).then(function (result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(15);
        var marker = new mapboxgl.Marker()
            .setLngLat(result)
            .addTo(map)
        getWeather(result[1], result[0])
    });
});

