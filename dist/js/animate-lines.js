(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])