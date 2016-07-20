var m = require('mithril')
var CurrentWeather = {
	getWeather: function() {
		return m.request({
			dataType: "jsonp",
			url: "https://api.forecast.io/forecast/"+ process.env.FORECAST_API_KEY +"/40.0150,-105.2705"
		})
	}
}

module.exports = CurrentWeather;