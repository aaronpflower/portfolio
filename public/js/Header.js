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


var Header = {};

Header.Model = {
	getCurrentConditions: function() {
		return m.request({
			dataType: "jsonp",
			url: "https://api.forecast.io/forecast/963c2a286c46883b606d0962897eeef7/40.0150,-105.2705"
		})
	},
	pageY: 0,
	pageHeight: window.innnerHeight
}

Header.vm = (function() {
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
	Header.Model.pageY = Math.max(e.pageY || window.pageYOffset, 0)
	Header.Model.innnerHeight = window.innnerHeight
	m.redraw()
})

Header.controller = function() {
	var that = this;
	this.currentTemp = m.prop();
	this.currentIcon = m.prop();
	this.currentSummary = m.prop();
	this.navWrapperScroll = m.prop();
	this.navItemWrapperScroll = m.prop();
	this.conditionsScroll = m.prop();
	this.whoamiScroll = m.prop();
	this.meImgScroll = m.prop();
	Header.Model.getCurrentConditions().then(function(data) {	
		var iconMap = Data.conditionsIcons.map(function(condition, i) {
			if (condition.icon === data.currently.icon) {
				that.currentIcon(condition.img)
			}
		})
		that.currentTemp(data.currently.apparentTemperature);
		that.currentSummary(data.currently.summary)
	})
}

Header.view = function(ctrl) {
	var pageY = Header.Model.pageY;
	var begin = pageY / 31 | 0;
	var end = begin + (Header.Model.pageHeight / 31 | 0 + 2);
	var offset = pageY % 31;
	
	var handleScroll = (function() {
		console.log(begin);
		if (begin > 10) {
			ctrl.navWrapperScroll("nav-wrapper-scroll");
			ctrl.navItemWrapperScroll("nav-item-wrapper-scroll");
			ctrl.conditionsScroll("conditions-scroll");
			ctrl.whoamiScroll("whoami-scroll");
			ctrl.meImgScroll("me-img-scroll");
		} 
		if (begin < 10) {
			ctrl.navWrapperScroll("");
			ctrl.navItemWrapperScroll("");
			ctrl.conditionsScroll("");
			ctrl.whoamiScroll("");
			ctrl.meImgScroll("");
		}
	}());
	return [
		m('nav.nav-wrapper#nav-wrapper', { class: ctrl.navWrapperScroll() }, [
			m('.nav-item-container',  [
				m('.whoami#whoami', { class: ctrl.whoamiScroll() }, [
					m('h2', "Aaron Flower"),
					m('h3', "Web Developer"),
					m('h3', "Boulder, CO")
				]),
				m('div.conditions#conditions', { class: ctrl.conditionsScroll() }, [
					m('p', "Current Conditions"),
					m('p', ctrl.currentSummary()),
					m('p', ctrl.currentTemp(), " °F")
				])
			])
		]),
		m('div.current-weather-component', [
			m('.current-icon', m.trust(require(ctrl.currentIcon()))),
			m(".boulder-svg", m.trust(require('../../dist/assets/boulder.svg'))),
			m('ul.nav-item-wrapper', { class: ctrl.navItemWrapperScroll() }, [
				m('li.about-li#about-li', [
					m('a#about', { onclick: Header.vm.scrollToAnchor }, "About")
				]),
				m('li.work-li#work-li', [
					m('a#work', { onclick: Header.vm.scrollToAnchor }, "Work")
				]),
				m('li.contact-li#contact-li', [
					m('a#contact', { onclick: Header.vm.scrollToAnchor }, "Contact")
				])
			]),
			m("img.me-img", { class: ctrl.meImgScroll(), src: "./assets/Aaron.jpg" } )
		])
	]
}

module.exports = Header;


