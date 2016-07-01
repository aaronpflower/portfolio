var SmootScroll = require('./smoothScroll.js')
var CurrentWeather = require('./currentWeather.js')
var m = require('mithril')


SmootScroll.controller.init();
m.mount(document.getElementById('current-weather'), m.component(CurrentWeather));

