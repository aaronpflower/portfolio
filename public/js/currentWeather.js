var m = require('mithril')

var CurrentWeather = {};

CurrentWeather.conditions = {
	icons: [{
		icon: 'clear-day',
		img: './assets/sun.svg'
	},
	{
		icon: 'clear-night',
		img: './assets/clear-night.svg'	
	},
	{
		icon: 'rain',
		img: './assets/rain.svg'
	},
	{
		icon: 'snow',
		img: './assets/snow.svg'
	},
	{
		icon: 'sleet',
		img: './assets/sleet.svg'
	},
	{
		icon: 'wind',
		img: './assets/wind.svg'
	},
	{
		icon: 'fog',
		img: './assets/fog.svg'
	},
	{
		icon: 'cloudy',
		img: './assets/cloud.svg'
	},
	{
		icon: 'partly-cloudy-day',
		img: './assets/partly-cloudy-sun.svg'
	},
	{
		icon: 'partly-cloudy-night',
		img: './assets/partly-cloudy-night.svg'
	}]
}


CurrentWeather.API = {
	getCurrentConditions: function() {
		return m.request({
			dataType: "jsonp",
			url: "https://api.forecast.io/forecast/963c2a286c46883b606d0962897eeef7/40.0150,-105.2705"
		})
	}
}

CurrentWeather.controller = function() {
	var that = this;
	this.currentTemp = m.prop();
	this.currentIcon = m.prop();
	this.currentSummary = m.prop();

	CurrentWeather.API.getCurrentConditions().then(function(data) {	
		var iconMap = CurrentWeather.conditions.icons.map(function(condition, i) {
			if (condition.icon === data.currently.icon) {
				that.currentIcon(condition.img)
			}
		})
		console.log(data)
		that.currentTemp(data.currently.apparentTemperature);
		that.currentSummary(data.currently.summary)
	})
}

CurrentWeather.view = function(ctrl) {
	return [
		m('div.currently-container', [
			m('h3', "Currently in Boulder"),
			m('p', ctrl.currentTemp(), " °F"),
			m('p', ctrl.currentSummary()),
			m('.current-icon-wrapper', [
				m("img.current-icon[src='"+ctrl.currentIcon()+"']")
			]),
			m("object.boulder-svg[type='image/svg+xml'], [data='../assets/boulder.svg']")
		])
	]
}

module.exports = CurrentWeather;


