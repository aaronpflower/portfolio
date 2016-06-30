var Portfolio = {};

Portfolio.controller = {
	init: function() {
		Portfolio.view.init();
	}
};

Portfolio.view = {
	init: function() {
		Portfolio.view.render()
	},
	render: function() {
		var smoothScroll = require('smoothscroll')
		var aboutAnchor = document.getElementById('about')
		var workAnchor = document.getElementById('work')
		var contactAnchor = document.getElementById('contact')
		var aboutSection = document.getElementById('about-section')
		var workSection = document.getElementById('work-section')
		var contactSection = document.getElementById('contact-section')

		var handleClick = function(el) {
			console.log(el)
			return function(e) {
				e.preventDefault();
				smoothScroll(el);
			}
		}

		aboutAnchor.addEventListener('click', handleClick(aboutSection))
		workAnchor.addEventListener('click', handleClick(workSection))
		contactAnchor.addEventListener('click', handleClick(contactSection))

	}
};

Portfolio.controller.init();
