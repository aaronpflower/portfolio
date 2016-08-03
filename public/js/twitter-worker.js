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
			} finally {
				console.log(data)
			}
		});
	};
	return vm
}());

TwitterWorker.controller = function() {
	TwitterWorker.vm.init();
	this.currentTweet = m.prop(TwitterWorker.vm.currentTweet());

};

TwitterWorker.view = function(ctrl) {
	return [
		 m('div.tweet-wrapper', [
			m('h2', "Twitter Intrests"), 
			m('p.tweet', ctrl.currentTweet())
		])
	]
}

module.exports = TwitterWorker;