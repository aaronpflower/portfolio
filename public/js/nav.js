var Nav = {};

Nav.controller = {
	init: function() {
		Nav.view.init();
	}
};

Nav.view = {
	init: function() {
		Nav.view.render()
	},

	render: function() {
		window.addEventListener('scroll', function(){
			var nav = document.getElementById('nav');
			var aboutLi = document.getElementById('about-li');
			var workLi = document.getElementById('work-li');
			var contactLi = document.getElementById('contact-li');

			nav.classList.add('nav-scroll')
			// aboutLi.classList.add('about-li-animate')
			// workLi.classList.add('work-li-animate')
			// contactLi.classList.add('contact-li-animate')

			if(window.pageYOffset == 0) {
				nav.classList.remove('nav-scroll')
				// aboutLi.classList.remove('about-li-animate')
				// workLi.classList.remove('work-li-animate')
				// contactLi.classList.remove('contact-li-animate')
			}
		})
	}
};

module.exports = Nav;