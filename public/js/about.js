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
	this.activeImg = m.prop(activeData.img)
	this.swap = function(swapToIndex) {
		activeData = inactiveData.splice(swapToIndex, 1, activeData)[0];
		that.activeDate(activeData.date)
		that.activeHeader(activeData.header)
		that.activeBody(activeData.body)
		that.activeImg(activeData.img)
		m.redraw()
	}
};

AboutSection.view = function(ctrl, active, inactive) {
	return [
		m('h2.text-align-center', "My Journey to Web Development"),
		m('.active-widget', [
			m('.about-active', [
				m('.active-copy', [
					m('h3', ctrl.activeDate()),
					m('p', ctrl.activeHeader()),
					m('p', ctrl.activeBody())
				]),
				m('.active-img', [
					m('img', {src: ctrl.activeImg() })
				])
			]),
			m('.about-inactive', [
				inactive.map(function(season, i) {
					return m('.about-wrapper', [ 
						m('.season-date', { 
							key: season.date, 
							onclick: ctrl.swap.bind(this, i)
						}, [
							m('.inactive-item', [
								m('h3', season.date)
							])
						])
					])
				})
			])
		])
	]
}

m.mount(aboutSection, m.component(AboutSection, activeData, inactiveData))

