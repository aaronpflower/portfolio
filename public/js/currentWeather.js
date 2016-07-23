var m = require('mithril')
require('../../dist/assets/sun.svg')
require('../../dist/assets/clear-night.svg')
require('../../dist/assets/rain.svg')
require('../../dist/assets/snow.svg')
require('../../dist/assets/sleet.svg')
require('../../dist/assets/wind.svg')
require('../../dist/assets/fog.svg')
require('../../dist/assets/cloud.svg')
require('../../dist/assets/partly-cloudy-sun.svg')
require('../../dist/assets/partly-cloudy-night.svg')
require('../../dist/assets/boulder.svg')


var CurrentWeather = {};

CurrentWeather.conditions = {
	icons: [{
		icon: 'clear-day',
		img: '../../dist/assets/sun.svg'
	},
	{
		icon: 'clear-night',
		img: '../../dist/assets/clear-night.svg'	
	},
	{
		icon: 'rain',
		img: '../../dist/assets/rain.svg'
	},
	{
		icon: 'snow',
		img: '../../dist/assets/snow.svg'
	},
	{
		icon: 'sleet',
		img: '../../dist/assets/sleet.svg'
	},
	{
		icon: 'wind',
		img: '../../dist/assets/wind.svg'
	},
	{
		icon: 'fog',
		img: '../../dist/assets/fog.svg'
	},
	{
		icon: 'cloudy',
		img: '../../dist/assets/cloud.svg'
	},
	{
		icon: 'partly-cloudy-day',
		img: '../../dist/assets/partly-cloudy-sun.svg'
	},
	{
		icon: 'partly-cloudy-night',
		img: '../../dist/assets/partly-cloudy-night.svg'
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
		m('div.current-weather-component', [
			m('div.conditions#conditions', [
				m('p', "Boulder, CO"),
				m('p', ctrl.currentTemp(), " °F"),
				m('p', ctrl.currentSummary())
			]),
			m('.whoami#whoami', [
				m('h2', "Aaron Flower"),
				m('h3', "Web Developer"),
				m('h3', "Boulder, CO")
			]),
			m('.current-icon', m.trust(require(ctrl.currentIcon()))),
			m(".boulder-svg", m.trust(require('../../dist/assets/boulder.svg')))
		])
	]
}

module.exports = CurrentWeather;


