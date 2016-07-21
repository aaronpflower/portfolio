var LineAnimation = {};

LineAnimation.controller = {
	init: function() {
		window.addEventListener('scroll', function(e) {
			var svg2 = document.getElementById('HowItWorks-02');
			// var svg3 = document.getElementById('HowItWorks-03');
			// var svg4 = document.getElementById('HowItWorks-04');
			// var svg5 = document.getElementById('HowItWorks-05');
			// var svg6 = document.getElementById('HowItWorks-06');

			if (isScrolledIntoView(svg2)) {
				svg2.classList.add('animate-lines')
			}
			// if (isScrolledIntoView(svg3)) {
			// 	svg3.classList.add('animate-lines')
			// }
			// if (isScrolledIntoView(svg4)) {
			// 	svg4.classList.add('animate-lines')
			// }
			// if (isScrolledIntoView(svg5)) {
			// 	svg5.classList.add('animate-lines')
			// }
			// if (isScrolledIntoView(svg6)) {
			// 	svg6.classList.add('animate-lines')
			// }
		})

		function isScrolledIntoView(el) {
			var elemTop = el.getBoundingClientRect().top;
			var elemBottom = el.getBoundingClientRect().bottom;
			// console.log(window.innerHeight)
			var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
			return isVisible;
		};

	}
};

module.exports = LineAnimation;