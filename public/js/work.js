// What's a scalable way to present this? 
//  RE, SAM, HD site

var m = require('mithril')
var Data = require('./Data.js')

var Work = {};

Work.vm = (function() {
	var vm = {}
	vm.init = function() {
		console.log("hello world")
	}
	return vm
}())

Work.controller = function() {
	Work.vm.init()
}

Work.view = function() {
	return [ 
		m('.work-component', [
			Data.projects.map(function(project, i) {
				return ('.company-work-wrapper', [
					m('h3', project.project),
					m('p', project.specs),
					m('p', project.about)
				])
			})
		])

	]
}

module.exports = Work;