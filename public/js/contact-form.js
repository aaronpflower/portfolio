var m = require('mithril')
var ContactForm = {};

ContactForm.API = {
	sendEmail: function() {
		return m.request({
			method: 'POST',
			url: 'http://localhost:3000/api/v1/emails/send-email'
		})
	}
}

ContactForm.controller = function() {

}

ContactForm.view = function(ctrl) {
	return m('form',
			m('.form-input-wrapper',
				m('input.form-input', {
					placeholder: 'Enter name...'
				}),
				m('input.form-input', {
					placeholder: 'Enter email...'
				}),
				m('input.form-input', {
					placeholder: 'Enter subject...'
				}),
				m('textarea', {
					placeholder: 'Enter email body...'
				}),
				m('button.form-button[type="button"]', {
					onclick: function (e) {
						ContactForm.API.sendEmail()
					}
				})
			)
		)
}

module.exports = ContactForm;