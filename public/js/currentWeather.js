var m = require('mithril')

var CurrentWeather = {};

CurrentWeather.API = {
	getCurrentConditions: function() {
		return m.request({
			dataType: "jsonp",
			url: 'https://api.forecast.io/forecast/963c2a286c46883b606d0962897eeef7/40.0150,-105.2705'
		})
	}
}

CurrentWeather.controller = function() {
	var that = this;
	this.currentTemp = m.prop();
	this.currentSummary = m.prop();
	var getCurrentWeather = CurrentWeather.API.getCurrentConditions().then(function(data) {
		that.currentTemp(data.currently.apparentTemperature);
		that.currentSummary(data.currently.summary)
		console.log(data)
	})
}

CurrentWeather.view = function(ctrl) {
	return m('h1', "Currently in Boulder", [
		m('div', ctrl.currentTemp()),
		m('div', ctrl.currentSummary())
	])
}

module.exports = CurrentWeather;