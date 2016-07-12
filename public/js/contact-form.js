var m = require('mithril')
var ContactForm = {};

ContactForm.API = {
	sendEmail: function(sender) {
		console.log(sender)
		return m.request({
			method: 'POST',
			url: 'http://localhost:3000/api/v1/emails/send-email',
			data: { 
				senderName: ContactForm.Model.senderName(),
				senderEmail: ContactForm.Model.senderEmail(),
				emailSubject: ContactForm.Model.emailSubject(),
				emailBody: ContactForm.Model.emailBody()
			}
		})
	}
}

ContactForm.Model = {
	senderName: m.prop(),
	senderEmail: m.prop(),
	emailSubject: m.prop(),
	emailBody: m.prop()
}

ContactForm.controller = function() {
	this.senderName = m.prop()
	this.senderEmail = m.prop()
	this.emailSubject = m.prop()
	this.emailBody = m.prop()
}

ContactForm.view = function(ctrl) {
	return m('div.contact-container',
			m('form',
				m('input.form-input', {
					oninput: m.withAttr('value', ctrl.senderName),
					placeholder: 'Enter name...'
				}),
				m('input.form-input', {
					oninput: m.withAttr('value', ctrl.senderEmail),
					placeholder: 'Enter email...'
				}),
				m('input.form-input', {
					oninput: m.withAttr('value', ctrl.emailSubject),
					placeholder: 'Enter subject...'
				}),
				m('textarea.form-textarea', {
					oninput: m.withAttr('value', ctrl.emailBody),
					placeholder: 'Enter email body...'
				}),
				m('button.form-button[type="button"]', "Submit", {
					onclick: function (e) {
						ContactForm.Model.senderName(ctrl.senderName)
						ContactForm.Model.senderEmail(ctrl.senderEmail)
						ContactForm.Model.emailSubject(ctrl.emailSubject)
						ContactForm.Model.emailBody(ctrl.emailBody)
						ContactForm.API.sendEmail()
					}
				})
			),
			m('.icons-container',
				m('a.icon-item[href="https://www.linkedin.com/in/aaron-flower-20748339"], [target="_blank"]',
					m('img', {src: "./assets/linkedIn.svg"})
				),
				m('a.icon-item[href="https://github.com/aaronpflower"], [target="_blank"]',
					m('img', {src: "./assets/github.svg"})
				)
			)
		) 
}

module.exports = ContactForm;