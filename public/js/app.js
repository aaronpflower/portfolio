var m = require('mithril');
var Header = require('./Header.js');
var ContactForm = require('./contact-form.js');
var TwitterWorker = require('./twitter-worker.js');
var Work = require('./work.js')
require('./about.js')

m.mount(document.getElementById('header-section'), m.component(Header));
m.mount(document.getElementById('contact-form'), m.component(ContactForm));
m.mount(document.getElementById('twitter-worker'), m.component(TwitterWorker))
m.mount(document.getElementById('work-mount'), m.component(Work));
