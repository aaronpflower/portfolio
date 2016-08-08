var m = require('mithril');
var Header = require('./Header.js');
var ContactForm = require('./contact-form.js');
var TwitterWorker = require('./twitter-worker.js');
var Work = require('./work.js')

m.mount(document.getElementById('header-section'), m.component(Header));
require('./about.js')
m.mount(document.getElementById('work-section'), m.component(Work));
m.mount(document.getElementById('contact-mount'), m.component(ContactForm));
m.mount(document.getElementById('twitter-mount'), m.component(TwitterWorker));
