(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Nav = {};

Nav.controller = {
	init: function() {
		Nav.view.init();
	}
};

Nav.view = {
	init: function() {
		var firstSection = document.getElementById('top').offsetHeight;
		var scrollTime = firstSection / 6;
		console.log(scrollTime)
		window.addEventListener('scroll', function(){
			var navItemWrapper = document.getElementById('nav-item-wrapper');
			var aboutLi = document.getElementById('about-li');
			var workLi = document.getElementById('work-li');
			var contactLi = document.getElementById('contact-li');
			var whoAmI = document.getElementById('whoami')
			var conditions = document.getElementById('conditions')

			if(window.pageYOffset > 0) {
				navItemWrapper.classList.add('nav-scroll')
				aboutLi.classList.add('about-li-animate')
				workLi.classList.add('work-li-animate')
				contactLi.classList.add('contact-li-animate')
				whoAmI.classList.add('whoami-scroll')
				conditions.classList.add('conditions-scroll')
			}

			else if(window.pageYOffset <= scrollTime) {
				navItemWrapper.classList.remove('nav-scroll')
				aboutLi.classList.remove('about-li-animate')
				workLi.classList.remove('work-li-animate')
				contactLi.classList.remove('contact-li-animate')
				whoAmI.classList.remove('whoami-scroll')
				conditions.classList.remove('conditions-scroll')
			}
		})
	}
};

module.exports = Nav;
},{}]},{},[1])