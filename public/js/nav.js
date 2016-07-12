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
			nav.classList.add('nav-scroll')
			if(window.pageYOffset == 0) {
				nav.classList.remove('nav-scroll')
			}
		})
	}
};

module.exports = Nav;