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
var boulderSVG = require('../../dist/assets/boulder.svg')


var Header = {};

Header.API = {
	getCurrentConditions: function() {
		return m.request({
			dataType: "jsonp",
			url: "https://api.forecast.io/forecast/963c2a286c46883b606d0962897eeef7/40.0150,-105.2705"
		})
	},
};

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
}());


Header.controller = function() {
	var that = this;
	this.currentTemp = m.prop();
	this.currentIcon = m.prop();
	this.currentSummary = m.prop();
	this.headerTopScroll = m.prop();
	this.navItemWrapperScroll = m.prop();
	this.conditionsScroll = m.prop();
	this.whoamiScroll = m.prop();
	this.meImgScroll = m.prop();
	this.pageY = m.prop();
	this.pageHeight = m.prop();
	Header.API.getCurrentConditions().then(function(data) {	
		var iconMap = Data.conditionsIcons.map(function(condition, i) {
			if (condition.icon === data.currently.icon) {
				that.currentIcon(condition.img)
			}
		})
		that.currentTemp(data.currently.apparentTemperature);
		that.currentSummary(data.currently.summary)
	})
	window.addEventListener("scroll", function(e) {
		that.pageY(Math.max(e.pageY || window.pageYOffset, 0))
		that.pageHeight(window.innnerHeight)
		m.redraw()
	})
}

Header.view = function(ctrl) {	
	var handleScroll = (function() {
		if (ctrl.pageY() > 150) {
			ctrl.headerTopScroll("header-top-scroll");
			ctrl.navItemWrapperScroll("nav-item-wrapper-scroll");
			ctrl.conditionsScroll("conditions-scroll");
			ctrl.whoamiScroll("whoami-scroll");
			ctrl.meImgScroll("me-img-wrapper-scroll");
		} 
		if (ctrl.pageY() < 150) {
			ctrl.headerTopScroll("");
			ctrl.navItemWrapperScroll("");
			ctrl.conditionsScroll("");
			ctrl.whoamiScroll("");
			ctrl.meImgScroll("");
		}
	}());
	return [
		m('.header-bg-img'),
		m('.header-top', { class: ctrl.headerTopScroll() }, [
			m('.whoami', { class: ctrl.whoamiScroll() }, [
				m('h2', "Aaron Flower"),
				m('h3', "Web Developer"),
				m('h3', "Boulder, CO")
			]),
			m('.conditions', { class: ctrl.conditionsScroll() }, [
				m('p', "Current Conditions"),
				m('p', ctrl.currentSummary()),
				m('p', ctrl.currentTemp(), " °F")
			])
		]),
		m('.header-bottom', [
			m('.current-icon', m.trust(require(ctrl.currentIcon()))),
			m(".boulder-svg", m.trust(boulderSVG)),
			m('ul.nav-item-wrapper', { class: ctrl.navItemWrapperScroll() }, [
				m('li.about-li#about-li', [
					m('a#about', { onclick: Header.vm.scrollToAnchor }, "About", [
						m('.li-line')
					])
				]),
				m('li.work-li#work-li', [
					m('a#work', { onclick: Header.vm.scrollToAnchor }, "Work", [
						m('.li-line')
					])
				]),
				m('li.contact-li#contact-li', [
					m('a#contact', { onclick: Header.vm.scrollToAnchor }, "Contact", [
						m('.li-line')
					])
				])
			]),
			m('.me-img-wrapper', { class: ctrl.meImgScroll() }, [
				m("img.me-img", { src: "./assets/Aaron.jpg" } )
			])
		])
	]
}

module.exports = Header;


