(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Data = {
	about: {
		activeData: {
			date: "The Early Years",
			header: "Meteorological and Baseball Enthusiast",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis maximus metus, vel faucibus enim ultricies at. Curabitur blandit est eget mi vulputate, suscipit gravida mi iaculis. Etiam nec risus id massa dignissim finibus id id ipsum. Vivamus sed bibendum ante. Curabitur ultricies magna vel turpis pulvinar finibus. Integer ultrices magna lorem, et luctus nisi faucibus non. In ut tempor sapien. Aenean non risus sit amet massa lacinia congue. Nullam vel laoreet lacus. Etiam augue sapien, porttitor gravida augue sed, interdum pellentesque nulla. "
		},
		inactiveData: [
			{
				date: "The Big Switch",
				header: "Running to Quality Assurance",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis maximus metus, vel faud id ipsum. Vivamus sed bibendum ante. Curabitur ultricies magna vel turpis pulvinar finibus. Integer ultrices magna lorem, et luctus nisi faucibus non. In ut tempor sapien. Aenean non risus sit amet massa lacinia congue. Nullam vel laoreet lacus. Etiam augue sapien, porttitor gravida augue sed, interdum pellentesque nulla. Donec dignissim tellus ac enim bibendum suscipit. Donec eleifend et eros tempus vehicula."
		
			},
			{
				date: "Moving On Up",
				header: "Quality Assurance to Web Development",
				body: "s at. Curabitur blandit est eget mi vulputate, suscipit gravida mi iaculis. Etiam nec risus id massa dignissim finibus id id ipsum. Vivamus sed bibendum ante. Curabitur ultricies magna vel turpis pulvinar finibus. Integer ultrices magna lorem, et luctus nisi faucibus non. In ut tempor sapien. Aenean non risus sit amet massa lacinia congue. Nullam vel laoreet lacus. Etiam augue sapien, porttitor gravida augue sed, interdum pellentesque nulla. Donec dignissim tellus ac enim bibendum suscipit. Donec eleifend et eros tempus vehicula."
			}
		]	
	},
	projects: [
		{
			company_id: "Human Design",
			img: "",
			project: "Racing Extinction",
			specs: "Squarespace, CSS, HTML, jQuery",
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis maximus metus, vel faucibus enim ultricies at. Curabitur blandit est eget mi vulputate, suscipit gravida mi iaculis. Etiam nec risus id massa dignissim finibus id id ipsum. Vivamus sed bibendum ante. Curabitur ultricies magna vel turpis pulvinar finibus."
		},
		{
			company_id: "Human Design",
			img: "",
			project: "Human Design Site",
			specs: "Node, Firebase, CSS, HTML, JavaScript",
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis maximus metus, vel faucibus enim ultricies at. Curabitur blandit est eget mi vulputate, suscipit gravida mi iaculis. Etiam nec risus id massa dignissim finibus id id ipsum. Vivamus sed bibendum ante. Curabitur ultricies magna vel turpis pulvinar finibus."
		},
		{
			company_id: "Human Design",
			img: "",
			project: "Social Action Machine",
			specs: "Node, Express, MongoDB, MithrilJS, CSS, Jade, JavaScript",
			about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis maximus metus, vel faucibus enim ultricies at. Curabitur blandit est eget mi vulputate, suscipit gravida mi iaculis. Etiam nec risus id massa dignissim finibus id id ipsum. Vivamus sed bibendum ante. Curabitur ultricies magna vel turpis pulvinar finibus."
		}
	],
	conditionsIcons: [
		{
			icon: 'clear-day',
			img: '../../dist/assets/sun.svg'
		},
		{
			icon: 'clear-night',
			img: '../../dist/assets/clear-night.svg'	
		},
		{
			icon: 'rain',
			img: '../../dist/assets/rain.svg'
		},
		{
			icon: 'snow',
			img: '../../dist/assets/snow.svg'
		},
		{
			icon: 'sleet',
			img: '../../dist/assets/sleet.svg'
		},
		{
			icon: 'wind',
			img: '../../dist/assets/wind.svg'
		},
		{
			icon: 'fog',
			img: '../../dist/assets/fog.svg'
		},
		{
			icon: 'cloudy',
			img: '../../dist/assets/cloud.svg'
		},
		{
			icon: 'partly-cloudy-day',
			img: '../../dist/assets/partly-cloudy-sun.svg'
		},
		{
			icon: 'partly-cloudy-night',
			img: '../../dist/assets/partly-cloudy-night.svg'
		}
	]
}


module.exports = Data;
},{}]},{},[1])