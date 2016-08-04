var m = require('mithril')
var Data = require('./Data.js')
var activeData = Data.about.activeData;
var inactiveData = Data.about.inactiveData;
var aboutSection = document.getElementById('about-section')

var AboutSection = {};

AboutSection.controller = function() {
	var that = this
	this.activeDate = m.prop(activeData.date)
	this.activeHeader = m.prop(activeData.header)
	this.activeBody = m.prop(activeData.body)
	this.swap = function(swapToIndex) {
		activeData = inactiveData.splice(swapToIndex, 1, activeData)[0];
		that.activeDate(activeData.date)
		that.activeHeader(activeData.header)
		that.activeBody(activeData.body)
		m.redraw()
	}
};

AboutSection.view = function(ctrl, active, inactive) {
	return [
		m('h3', ctrl.activeDate()),
		m('p', ctrl.activeHeader()),
		m('p', ctrl.activeBody()),
		m('.more-about', [
			inactive.map(function(season, i) {
				return m('.about-wrapper', [ 
					m('.season-date', { 
						key: season.date, 
						onclick: ctrl.swap.bind(this, i)
					}, [
						m('.date-circle', [
							m('h3', season.date)
						])
					])
				])
			})
		])
	]
}

m.mount(aboutSection, m.component(AboutSection, activeData, inactiveData))

