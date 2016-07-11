var m = require ('mithril');
var Twitter = require('twitter');
var socket = io();

var TwitterWorker = {};

TwitterWorker.controller = function() {
	var that = this;
	this.currentTweet = m.prop();

	socket.on("tweet", function(data) {
		that.currentTweet(data);
		console.log(data)
	})

}

TwitterWorker.view = function(ctrl) {
	return m('div', {
		config: function() {
			console.log(ctrl.currentTweet())
		}
	},
		m('h1', "Twitter Stream: ", ctrl.currentTweet())	
	)
}

module.exports = TwitterWorker;