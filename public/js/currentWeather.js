var m = require('mithril')
var Data = require('./Data.js')
var smoothScroll = require('smoothscroll')
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

CurrentWeather.Model = {
	getCurrentConditions: function() {
		return m.request({
			dataType: "jsonp",
			url: "https://api.forecast.io/forecast/963c2a286c46883b606d0962897eeef7/40.0150,-105.2705"
		})
	},
	pageY: 0,
	pageHeight: window.innnerHeight
}

CurrentWeather.vm = (function() {
	var vm = {};
	vm.scrollToAnchor = function(e) {
		var aboutSection = document.getElementById('about-section')
		var workSection = document.getElementById('work-section')
		var contactSection = document.getElementById('contact-section')
		
		if(e.target.id === "about") {
			smoothScroll(aboutSection);
		} else if(e.target.id === "work") {
			smoothScroll(workSection)
		} else if(e.target.id === "contact") {
			smoothScroll(contactSection)
		}
	}
	return vm
}())

window.addEventListener("scroll", function(e) {
	CurrentWeather.Model.pageY = Math.max(e.pageY || window.pageYOffset, 0)
	CurrentWeather.Model.innnerHeight = window.innnerHeight
	m.redraw()
})

CurrentWeather.controller = function() {
	var that = this;
	this.currentTemp = m.prop();
	this.currentIcon = m.prop();
	this.currentSummary = m.prop();
	CurrentWeather.Model.getCurrentConditions().then(function(data) {	
		var iconMap = Data.conditionsIcons.map(function(condition, i) {
			if (condition.icon === data.currently.icon) {
				that.currentIcon(condition.img)
			}
		})
		that.currentTemp(data.currently.apparentTemperature);
		that.currentSummary(data.currently.summary)
	})
}

CurrentWeather.view = function(ctrl) {
	var navWrapper = document.getElementById('nav-wrapper');
	var navItemWrapper = document.getElementById('nav-item-wrapper')
	var aboutLi = document.getElementById('about-li');
	var workLi = document.getElementById('work-li');
	var contactLi = document.getElementById('contact-li');
	var whoAmI = document.getElementById('whoami')
	var conditions = document.getElementById('conditions')
	var pageY = CurrentWeather.Model.pageY
	var begin = pageY / 31 | 0
	// Add 2 so that the top and bottom of the page are filled with
	// next/prev item, not just whitespace if item not in full view
	var end = begin + (CurrentWeather.Model.pageHeight / 31 | 0 + 2)
	var offset = pageY % 31
	
	var handleScroll = function(el, style) {
		console.log(el, style)
		if (pageY >= begin) {
			el.classList.add(style)
		} else if (pageY <= begin) {
			el.classList.remove(style)
		}
	}
	return [
		m('nav.nav-wrapper#nav-wrapper', {
			config: function(el) {
				console.log(el)
				return handleScroll(el, "nav-wrapper-scroll")
				
			}
		},
			m('.nav-item-container', [
				m('.whoami#whoami', [
					m('h2', "Aaron Flower"),
					m('h3', "Web Developer"),
					m('h3', "Boulder, CO")
				]),
				m('div.conditions#conditions', [
					m('p', "Current Conditions"),
					m('p', ctrl.currentSummary()),
					m('p', ctrl.currentTemp(), " °F")
				])
			])
		),
		m('div.current-weather-component', [
			m('.current-icon', m.trust(require(ctrl.currentIcon()))),
			m(".boulder-svg", m.trust(require('../../dist/assets/boulder.svg'))),
			m('ul.nav-item-wrapper#nav-item-wrapper', [
				m('li.about-li#about-li', [
					m('a#about', { onclick: CurrentWeather.vm.scrollToAnchor }, "About")
				]),
				m('li.work-li#work-li', [
					m('a#work', { onclick: CurrentWeather.vm.scrollToAnchor }, "Work")
				]),
				m('li.contact-li#contact-li', [
					m('a#contact', { onclick: CurrentWeather.vm.scrollToAnchor }, "Contact")
				])
			])
		])
	]
}

module.exports = CurrentWeather;


