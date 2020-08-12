const request = require('request')
const forecast = (lat,long, callback) => {

    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+long+'&exclude=hourly,minutely&appid=<Enter you API Key>&units=metric'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.message === 'city not found') {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, response.body)
        }
    })
}



module.exports = forecast