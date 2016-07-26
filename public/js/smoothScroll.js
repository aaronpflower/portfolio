// // SmoothScroll
// var SmootScroll = {};

// SmootScroll.controller = {
// 	init: function() {
// 		SmootScroll.view.init();
// 	}
// };

// SmootScroll.view = {
// 	init: function() {
// 		SmootScroll.view.render()
// 	},

// 	render: function() {
// 		var smoothScroll = require('smoothscroll')
// 		var aboutAnchor = document.getElementById('about')
// 		var workAnchor = document.getElementById('work')
// 		var contactAnchor = document.getElementById('contact')
// 		var aboutSection = document.getElementById('about-section')
// 		var workSection = document.getElementById('work-section')
// 		var contactSection = document.getElementById('contact-section')

// 		var handleClick = function(el) {
// 			return function(e) {
// 				e.preventDefault();
// 				smoothScroll(el);
// 			}
// 		}

// 		aboutAnchor.addEventListener('click', handleClick(aboutSection))
// 		workAnchor.addEventListener('click', handleClick(workSection))
// 		contactAnchor.addEventListener('click', handleClick(contactSection))

// 	}
// };

// module.exports = SmootScroll;