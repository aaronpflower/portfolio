var SmootScroll = require('./smoothScroll.js');
var CurrentWeather = require('./currentWeather.js');
var m = require('mithril');
var ContactForm = require('./contact-form.js');
var TwitterWorker = require('./twitter-worker.js');
var About = require('./about.js')
var Nav = require('./nav.js')

SmootScroll.controller.init();
Nav.controller.init();
m.mount(document.getElementById('current-weather'), m.component(CurrentWeather));
m.mount(document.getElementById('contact-form'), m.component(ContactForm));
m.mount(document.getElementById('about-mount'), m.component(About));
m.mount(document.getElementById('twitter-worker'), m.component(TwitterWorker));
