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

CurrentWeather.API = {
	getCurrentConditions: function() {
		return m.request({
			dataType: "jsonp",
			url: "https://api.forecast.io/forecast/963c2a286c46883b606d0962897eeef7/40.0150,-105.2705"
		})
	}
}

CurrentWeather.vm = (function() {
	var vm = {};
	
	vm.navAnimation = function() {
		var firstSection = document.getElementById('header-section').offsetHeight;
		var scrollTime = firstSection / 4;
		console.log(scrollTime)
		window.addEventListener('scroll', function(){
			var navWrapper = document.getElementById('nav-wrapper');
			// var navItemWrapper = document.getElementById('nav-item-wrapper')
			// var aboutLi = document.getElementById('about-li');
			// var workLi = document.getElementById('work-li');
			// var contactLi = document.getElementById('contact-li');
			var whoAmI = document.getElementById('whoami')
			var conditions = document.getElementById('conditions')

			if(window.pageYOffset >= scrollTime) {
				navWrapper.classList.add('nav-wrapper-scroll')
				// navItemWrapper.classList.add('nav-item-wrapper-scroll')
				// aboutLi.classList.add('about-li-animate')
				// workLi.classList.add('work-li-animate')
				// contactLi.classList.add('contact-li-animate')
				conditions.classList.add('conditions-scroll')
				whoAmI.classList.add('whoami-scroll')
			}

			else if(window.pageYOffset <= scrollTime) {
				navWrapper.classList.remove('nav-wrapper-scroll')
				// navItemWrapper.classList.remove('nav-item-wrapper-scroll')
				// aboutLi.classList.remove('about-li-animate')
				// workLi.classList.remove('work-li-animate')
				// contactLi.classList.remove('contact-li-animate')
				conditions.classList.remove('conditions-scroll')
				whoAmI.classList.remove('whoami-scroll')
			}
		})
	},
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

CurrentWeather.controller = function() {
	var that = this;
	this.currentTemp = m.prop();
	this.currentIcon = m.prop();
	this.currentSummary = m.prop();
	CurrentWeather.API.getCurrentConditions().then(function(data) {	
		var iconMap = Data.conditionsIcons.map(function(condition, i) {
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
		m('nav.nav-wrapper#nav-wrapper', [ {
			config: CurrentWeather.vm.navAnimation()
		},
			m('.nav-item-container', [
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
				]),
				m('.whoami#whoami', [
					m('h2', "Aaron Flower"),
					m('h3', "Web Developer"),
					m('h3', "Boulder, CO")
				]),
				m('div.conditions#conditions', [
					m('p', "Boulder, CO"),
					m('p', ctrl.currentTemp(), " °F"),
					m('p', ctrl.currentSummary())
				])
			])
		]),
		m('div.current-weather-component', [
			m('.current-icon', m.trust(require(ctrl.currentIcon()))),
			m(".boulder-svg", m.trust(require('../../dist/assets/boulder.svg')))
		])
	]
}

module.exports = CurrentWeather;


