var m = require ('mithril');
var Twitter = require('twitter');
var socket = io();

var TwitterWorker = {};

TwitterWorker.controller = function() {
	var that = this;
	this.currentTweet = m.prop();

	(function () {
		socket.on("tweet", function(data) {
			try { 
				if (data) {
					that.currentTweet(data);
					m.redraw(true)
				}
			} catch (e) {
				alert("There is a problem: ", e);
			} finally {
				console.log(data)
			}
		});
	}) ();
}

TwitterWorker.view = function(ctrl) {
	return m('div.tweet-wrapper', {
		config: function() {
			console.log(ctrl.currentTweet())
		}
	},
		m('h1', "Twitter Intrests"), 
		m('h3.tweet', ctrl.currentTweet())
	)
}

module.exports = TwitterWorker;