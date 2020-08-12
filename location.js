const tempData = document.getElementById('tempData')
const descriptionData = document.getElementById('description')
const day1 = document.getElementById('day1')
const day2 = document.getElementById('day2')
const day3 = document.getElementById('day3')
const day4 = document.getElementById('day4')
const day5 = document.getElementById('day5')
let temp = document.querySelectorAll(".temp");
let descriptionInfo = document.querySelectorAll(".description");
let maxTemp = document.querySelectorAll(".max-temp");
let humidity = document.querySelectorAll(".humidity");
let minTemp = document.querySelectorAll(".min-temp");
let wind = document.querySelectorAll(".wind");
let arrow = document.querySelectorAll(".humidity-wind img");
const standardDate1 = document.getElementById('standardDate1')
const standardDate2 = document.getElementById('standardDate2')
const standardDate3 = document.getElementById('standardDate3')
const standardDate4 = document.getElementById('standardDate4')
const standardDate5 = document.getElementById('standardDate5')

window.addEventListener('load', function locate() {
    
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        let lat
        let long
        lat = position.coords.latitude
        long = position.coords.longitude
        console.log(lat, long)

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + long + '&exclude=hourly,minutely&appid=<Enter you API Key>&units=metric').then((response) => {
            response.json().then((data) => {
                console.log(data)
                console.log(data.daily[0].weather[0].description)
                descriptionData.innerHTML = data.daily[0].weather[0].description
                tempData.innerHTML = data.daily[0].temp.day
    
                var i;
                for (i = 0; i < 5; i++) {
                    maxTemp[i].innerHTML = data.daily[i].temp.max + '°C'
                    humidity[i].innerHTML = data.daily[i].humidity + '%'
                    minTemp[i].innerHTML = data.daily[i].temp.min + '°C'
                    wind[i].innerHTML = data.daily[i].wind_speed + 'km/h'
                    descriptionInfo[i].innerHTML = data.daily[i].weather[0].description
                    temp[i].innerHTML = data.daily[i].temp.day + '°C'
                }

                var direction;

                i = 0;
                arrow.forEach(function (element) {
                    direction = data.daily[i++].wind_deg;
                    element.style.transform = "rotate(" + direction + "deg)";
                    element.setAttribute('alt', direction + ' degrees');
                });

                
                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                

                var dateUnix1 = data.daily[0].dt * 1000
                var newDate1 = new Date(dateUnix1).toDateString()
                var d = new Date(newDate1);
                var dayName = days[d.getDay()];
                day1.innerHTML = dayName
                standardDate1.innerHTML = newDate1

                var dateUnix2 = data.daily[1].dt * 1000
                var newDate2 = new Date(dateUnix2).toDateString()
                var d = new Date(newDate2);
                var dayName = days[d.getDay()];
                day2.innerHTML = dayName
                standardDate2.innerHTML = newDate2

                var dateUnix3 = data.daily[2].dt * 1000
                var newDate3 = new Date(dateUnix3).toDateString()
                var d = new Date(newDate3);
                var dayName = days[d.getDay()];
                day3.innerHTML = dayName
                standardDate3.innerHTML = newDate3

                var dateUnix4 = data.daily[3].dt * 1000
                var newDate4 = new Date(dateUnix4).toDateString()
                var d = new Date(newDate4);
                var dayName = days[d.getDay()];
                day4.innerHTML = dayName
                standardDate4.innerHTML = newDate4

                var dateUnix5 = data.daily[4].dt * 1000
                var newDate5 = new Date(dateUnix5).toDateString()
                var d = new Date(newDate5);
                var dayName = days[d.getDay()];
                day5.innerHTML = dayName
                standardDate5.innerHTML = newDate5

            })
        })
    })
})



