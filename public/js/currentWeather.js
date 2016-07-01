var m = require('mithril')

var CurrentWeather = {};

CurrentWeather.conditions = {
	icons: [{
		icon: 'clear-day',
		img: './assets/cloud.svg'
	},
	{
		icon: 'clear-night',
		img: './assets/cloud.svg'	
	},
	{
		icon: 'rain',
		img: './assets/cloud.svg'
	},
	{
		icon: 'snow',
		img: './assets/cloud.svg'
	},
	{
		icon: 'sleet',
		img: './assets/cloud.svg'
	},
	{
		icon: 'wind',
		img: './assets/cloud.svg'
	},
	{
		icon: 'fog',
		img: './assets/cloud.svg'
	},
	{
		icon: 'cloudy',
		img: './assets/cloud.svg'
	},
	{
		icon: 'partly-cloudy-day',
		img: './assets/cloud.svg'
	},
	{
		icon: 'partly-cloudy-night',
		img: './assets/cloud.svg'
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
	this.currentSummary = m.prop()

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
	return m('div.currently-container',
		m('h3', "Currently in Boulder"),
		m('p', ctrl.currentTemp(), " °F"),
		m('p', ctrl.currentSummary()),
		m("img.current-icon[src='"+ctrl.currentIcon()+"']")
	)
}

module.exports = CurrentWeather;


