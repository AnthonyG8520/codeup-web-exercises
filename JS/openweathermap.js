$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${51.1657}&lon=${10.4515}&appid=${weathermap_key}`).done(function(weather){
    console.log(weather)
});
