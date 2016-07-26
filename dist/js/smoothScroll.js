(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])