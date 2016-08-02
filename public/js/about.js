var m = require('mithril')
var Data = require('./Data.js')


var activeData = {
	date: "The Early Years",
	header: "Meteorological and Baseball Enthusiast",
	body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis maximus metus, vel faucibus enim ultricies at. Curabitur blandit est eget mi vulputate, suscipit gravida mi iaculis. Etiam nec risus id massa dignissim finibus id id ipsum. Vivamus sed bibendum ante. Curabitur ultricies magna vel turpis pulvinar finibus. Integer ultrices magna lorem, et luctus nisi faucibus non. In ut tempor sapien. Aenean non risus sit amet massa lacinia congue. Nullam vel laoreet lacus. Etiam augue sapien, porttitor gravida augue sed, interdum pellentesque nulla. Donec dignissim tellus ac enim bibendum suscipit. Donec eleifend et eros tempus vehicula."
}

var inactiveData = [
	{
		date: "The Big Switch",
		header: "Running to Quality Assurance",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis maximus metus, vel faucibus enim ultricies at. Curabitur blandit est eget mi vulputate, suscipit gravida mi iaculis. Etiam nec risus id massa dignissim finibus id id ipsum. Vivamus sed bibendum ante. Curabitur ultricies magna vel turpis pulvinar finibus. Integer ultrices magna lorem, et luctus nisi faucibus non. In ut tempor sapien. Aenean non risus sit amet massa lacinia congue. Nullam vel laoreet lacus. Etiam augue sapien, porttitor gravida augue sed, interdum pellentesque nulla. Donec dignissim tellus ac enim bibendum suscipit. Donec eleifend et eros tempus vehicula."
	},
	{
		date: "Moving On Up",
		header: "Quality Assurance to Web Development",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis maximus metus, vel faucibus enim ultricies at. Curabitur blandit est eget mi vulputate, suscipit gravida mi iaculis. Etiam nec risus id massa dignissim finibus id id ipsum. Vivamus sed bibendum ante. Curabitur ultricies magna vel turpis pulvinar finibus. Integer ultrices magna lorem, et luctus nisi faucibus non. In ut tempor sapien. Aenean non risus sit amet massa lacinia congue. Nullam vel laoreet lacus. Etiam augue sapien, porttitor gravida augue sed, interdum pellentesque nulla. Donec dignissim tellus ac enim bibendum suscipit. Donec eleifend et eros tempus vehicula."
	}
]

var AboutSwapper = {};

AboutSwapper.vm = (function() {
	var vm = {}
	vm.init = function() {
		console.log("hello world")
	}
	return vm
}())

AboutSwapper.controller = function(args) {
	AboutSwapper.vm.init()
}

AboutSwapper.view = function(ctrl, args) {
	return [
		m('h3', args.date),
		m('p', args.header),
		m('p', args.body)
	]
}

var MoreAbout = {}

MoreAbout.controller = function() {
	return this
}

MoreAbout.view = function(ctrl, args) {
	return [
		m('.about-header', "Choose One"),
		m('.about-swapper', [
			args.map(function(season, i) {
				return m('.about-wrapper',
					m('.season-date', {
							onclick: function() {
								console.log("hi")
								swap(i);
							} 
						},
						m('.date-circle', [
							m('h3', season.date)
						])
					)
				)
			})
		])
	]
}

var aboutSection = document.getElementById('about-section')
var moreAbout = document.getElementById('more-about')

function swap(swapToIndex) {
	m.mount(aboutSection, null);
	m.mount(moreAbout, null);

	activeData = inactiveData.splice(swapToIndex, 1, activeData)[0];
	m.mount(aboutSection, m.component(AboutSwapper, activeData))
	m.mount(moreAbout, m.component(moreAbout, inactiveData))
}

m.mount(aboutSection, m.component(AboutSwapper, activeData))
m.mount(moreAbout, m.component(MoreAbout, inactiveData))
