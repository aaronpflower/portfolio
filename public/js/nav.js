var Nav = {};

Nav.controller = {
	init: function() {
		Nav.view.init();
	}
};

Nav.view = {
	init: function() {
		var firstSection = document.getElementById('top').offsetHeight;
		var scrollTime = firstSection / 2;
		console.log(scrollTime)
		window.addEventListener('scroll', function(){
			var nav = document.getElementById('nav');
			var aboutLi = document.getElementById('about-li');
			var workLi = document.getElementById('work-li');
			var contactLi = document.getElementById('contact-li');

			if(window.pageYOffset >= scrollTime) {
				nav.classList.add('nav-scroll')
				aboutLi.classList.add('about-li-animate')
				workLi.classList.add('work-li-animate')
				contactLi.classList.add('contact-li-animate')
			}

			else if(window.pageYOffset <= scrollTime) {
				nav.classList.remove('nav-scroll')
				aboutLi.classList.remove('about-li-animate')
				workLi.classList.remove('work-li-animate')
				contactLi.classList.remove('contact-li-animate')
			}
		})
	}
};

module.exports = Nav;