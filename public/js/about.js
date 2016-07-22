// Idea: For desktop have line animation with dude growing up and looping through

var m = require('mithril');
var Data = require('./Data.js');

var About = {};

About.vm = (function() {
	var vm = {}
	vm.init = function () {
		vm.sliderOver = m.prop();
		vm.slideRight = function() {
			if(vm.sliderOver() == "right-one-third") {
				vm.sliderOver('right-two-thirds')
			} else if (vm.sliderOver() == "right-two-thirds") {
				vm.sliderOver('right-three-thirds')
			} else if (vm.sliderOver() == "right-three-thirds") {
				vm.sliderOver('')
			} else {
				vm.sliderOver('right-one-third')
			}
		};
	}
	return vm
}())

About.controller = function() {
	About.vm.init();
}

About.view = function(ctrl) {
	return [
		m('.about-component-wrapper', [
			m('a.next-slide.right', { onclick: About.vm.slideRight}, [
				m('img', {src: "./assets/forward-arrow.png" })
			]),
			m('.slide-container', {class: About.vm.sliderOver()}, [			
				Data.about.map(function(slide, i){
					console.log(i)
					return m('div.slide-wrapper',
						m('.slide-left', [
							m('h3', slide.header)
						]),
						m('.slide-right', [
							m('h3', slide.header),
							m('p', slide.body)
						])
					)
				})
			])
		])
	]
}

module.exports = About;

