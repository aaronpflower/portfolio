var m = require('mithril')

var ContactForm = {};

ContactForm.API = {

}

ContactForm.controller = function() {

}

ContactForm.view = function(ctrl) {
	return m('form',
			m('input'),
			m('input', {
				placeholder: 'Hi'
			}),
			m('button')
		)
}

module.exports = ContactForm;