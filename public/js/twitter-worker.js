var m = require ('mithril');
var Twitter = require('twitter');
var socket = io();

var TwitterWorker = {};

TwitterWorker.vm = (function() {
	var vm = {};
	vm.currentTweet = m.prop();

	vm.init = function() {
		vm.currentTweet("Waiting for lastest tweets...")
		socket.on("tweet", function(data) {
			try { 
				if (data) {
					vm.currentTweet(data);
					m.redraw(true)
				}
			} catch (e) {
				alert("There is a problem: ", e);
			}
		});
	};
	return vm
}());

TwitterWorker.controller = function() {
	TwitterWorker.vm.init();
};

TwitterWorker.view = function(ctrl) {
	return [
		 m('div.tweet-wrapper', [
			m('h2', "Twitter Intrests"), 
			m('p.tweet', TwitterWorker.vm.currentTweet())
		])
	]
}

module.exports = TwitterWorker;