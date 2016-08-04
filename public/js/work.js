// Idea: For desktop have line animation with dude growing up and looping through

var m = require('mithril');
var Data = require('./Data.js');

var Work = {};

Work.vm = (function() {
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

Work.controller = function() {
	Work.vm.init();
}

Work.view = function(ctrl) {
	return [
		m('h2.text-align-center', "Projects I Have Worked on"),
		m('.work-component-wrapper', [
			m('a.next-slide.right', { onclick: Work.vm.slideRight}, [
				m('img', {src: "./assets/forward-arrow.png" })
			]),
			m('.slide-container', {class: Work.vm.sliderOver()}, [			
				Data.projects.map(function(slide, i){
					return m('div.slide-wrapper',
						m('.slide-left', [
							m('h2', slide.project),
							m('h3', slide.company_id)
						]),
						m('.slide-right', [
							m('h3', slide.specs),
							m('p', slide.about)
						])
					)
				})
			])
		])
	]
}

module.exports = Work;

