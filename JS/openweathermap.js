function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = month + ' ' + date + ' ' + year ;
    return time;
}


$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${29.4241}&lon=${-98.4936}&units=imperial&exclude={part}&appid=${weathermap_key}`).done(function(data){
    console.log(data)
    for (var i = 0; i <= 4; i++) {
        let date = timeConverter(data.daily[i].dt);
        let weatherEntry = `<div id="day-weather">
                                <div>${date}</div>
                                <img src="https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png" alt="">
                                <div>Low: ${data.daily[i].temp.min} / High: ${data.daily[i].temp.max}</div>
                                <div>Humidity: ${data.daily[i].humidity}%</div>
                                <div>${data.daily[i].weather[0].description}</div>
                            </div>`
        $("#weather").append(weatherEntry);
    }
});
