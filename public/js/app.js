var m = require('mithril');
var CurrentWeather = require('./currentWeather.js');
var ContactForm = require('./contact-form.js');
var TwitterWorker = require('./twitter-worker.js');
var About = require('./about.js')
var Work = require('./work.js')

m.mount(document.getElementById('header-section'), m.component(CurrentWeather));
m.mount(document.getElementById('contact-form'), m.component(ContactForm));
m.mount(document.getElementById('about-mount'), m.component(About));
// m.mount(document.getElementById('twitter-worker'), m.component(TwitterWorker));
m.mount(document.getElementById('work-mount'), m.component(Work));
