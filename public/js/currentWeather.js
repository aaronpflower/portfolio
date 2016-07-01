var m = require('mithril')

var CurrentWeather = {};

CurrentWeather.conditions = {
	icons: [{
		icon: 'clear-day',
		img: './assets/boulder-sunny.jpg'
	},
	{
		icon: 'clear-night',
		img: './assets/boulder-sunny.jpg'	
	},
	{
		icon: 'rain',
		img: './assets/boulder-sunny.jpg'
	},
	{
		icon: 'snow',
		img: './assets/boulder-sunny.jpg'
	},
	{
		icon: 'sleet',
		img: './assets/boulder-sunny.jpg'
	},
	{
		icon: 'wind',
		img: './assets/boulder-sunny.jpg'
	},
	{
		icon: 'fog',
		img: './assets/boulder-sunny.jpg'
	},
	{
		icon: 'cloudy',
		img: './assets/boulder-sunny.jpg'
	},
	{
		icon: 'partly-cloudy-day',
		img: './assets/boulder-sunny.jpg'
	},
	{
		icon: 'partly-cloudy-night',
		img: './assets/boulder-sunny.jpg'
	}]
}


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
	this.currentIcon = m.prop();

	CurrentWeather.API.getCurrentConditions().then(function(data) {	
		var currentSummary = CurrentWeather.conditions.icons.map(function(condition, i) {
			if (condition.icon === data.currently.icon) {
				that.currentIcon(condition.img)
			}
		})
		that.currentTemp(data.currently.apparentTemperature);
	})
}

CurrentWeather.view = function(ctrl) {
	return m('div.currently-container', {
			// config: function(el) {
			// 	return el.style.backgroundImage = 'url("'+ctrl.currentIcon()+'")'
			// }
		},
		m('h3', "Currently in Boulder"),
		m('p', ctrl.currentTemp(), " °F")
	)
}

module.exports = CurrentWeather;


