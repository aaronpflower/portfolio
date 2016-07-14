(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])