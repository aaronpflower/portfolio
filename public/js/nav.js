// var Nav = {};

// Nav.controller = {
// 	init: function() {
// 		Nav.view.init();
// 	}
// };

// Nav.view = {
// 	init: function() {
// 		var firstSection = document.getElementById('top').offsetHeight;
// 		var scrollTime = firstSection / 6;
// 		console.log(scrollTime)
// 		window.addEventListener('scroll', function(){
// 			var navItemWrapper = document.getElementById('nav-item-wrapper');
// 			var aboutLi = document.getElementById('about-li');
// 			var workLi = document.getElementById('work-li');
// 			var contactLi = document.getElementById('contact-li');
// 			var whoAmI = document.getElementById('whoami')
// 			var conditions = document.getElementById('conditions')

// 			if(window.pageYOffset > 0) {
// 				navItemWrapper.classList.add('nav-scroll')
// 				aboutLi.classList.add('about-li-animate')
// 				workLi.classList.add('work-li-animate')
// 				contactLi.classList.add('contact-li-animate')
// 				conditions.classList.add('conditions-scroll')
// 				whoAmI.classList.add('whoami-scroll')
// 			}

// 			else if(window.pageYOffset <= scrollTime) {
// 				navItemWrapper.classList.remove('nav-scroll')
// 				aboutLi.classList.remove('about-li-animate')
// 				workLi.classList.remove('work-li-animate')
// 				contactLi.classList.remove('contact-li-animate')
// 				conditions.classList.remove('conditions-scroll')
// 				whoAmI.classList.remove('whoami-scroll')
// 			}
// 		})
// 	}
// };

// module.exports = Nav;