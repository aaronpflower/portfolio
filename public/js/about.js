var m = require('mithril')
var Data = require('./Data.js')
var activeData = Data.about.activeData;
var inactiveData = Data.about.inactiveData;
var aboutSection = document.getElementById('about-section')
var moreAbout = document.getElementById('more-about')

var AboutSwapper = {};

AboutSwapper.controller = function(args) {
	return this
}

AboutSwapper.view = function(ctrl, args) {
	return [
		m('h3', args.date),
		m('p', args.header),
		m('p', args.body)
	]
};


var MoreAbout = {};

MoreAbout.vm = (function() {
	var vm = {};
	vm.init = function() {
		vm.swap = function(swapToIndex) {
			m.mount(aboutSection, null);
			m.mount(moreAbout, null);

			activeData = inactiveData.splice(swapToIndex, 1, activeData)[0];
			m.mount(aboutSection, m.component(AboutSwapper, activeData))
			m.mount(moreAbout, m.component(MoreAbout, inactiveData))
		}
	}
	return vm;
}());

MoreAbout.controller = function() {
	MoreAbout.vm.init();
};

MoreAbout.view = function(ctrl, args) {
	return [
		args.map(function(season, i) {
			return m('.about-wrapper', [ 
				m('.season-date', { onclick: function() { MoreAbout.vm.swap(i) }}, [
					m('.date-circle', [
						m('h3', season.date)
					])
				])
			])
		})
	]
}


m.mount(aboutSection, m.component(AboutSwapper, activeData))
m.mount(moreAbout, m.component(MoreAbout, inactiveData))

