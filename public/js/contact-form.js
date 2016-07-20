var m = require('mithril')
var ContactForm = {};

ContactForm.API = {
	sendEmail: function() {
		console.log(ContactForm.vm.senderEmail())
		return m.request({
			method: 'POST',
			url: 'http://localhost:3000/api/v1/emails/send-email',
			data: { 
				senderName: ContactForm.vm.senderName(),
				senderEmail: ContactForm.vm.senderEmail(),
				emailSubject: ContactForm.vm.emailSubject(),
				emailBody: ContactForm.vm.emailBody()
			}
		})
	}
}

ContactForm.vm = (function() {
	var vm = {}
	vm.init = function() {
		vm.senderName = m.prop(),
		vm.senderEmail = m.prop(),
		vm.emailSubject = m.prop(),
		vm.emailBody = m.prop(),
		vm.sendData = function() {
			ContactForm.API.sendEmail()
		};
	}
	return vm
}())

ContactForm.controller = function() {
	ContactForm.vm.init();
}

ContactForm.view = function(ctrl) {
	return [
		m('div.contact-container', [
			m('h1.section-title', "Contact"),
			m('form', [
				m('input.form-input', {
					oninput: m.withAttr('value', ContactForm.vm.senderName),
					placeholder: 'Enter name...'
				}),
				m('input.form-input', {
					oninput: m.withAttr('value', ContactForm.vm.senderEmail),
					placeholder: 'Enter email...'
				}),
				m('input.form-input', {
					oninput: m.withAttr('value', ContactForm.vm.emailSubject),
					placeholder: 'Enter subject...'
				}),
				m('textarea.form-textarea', {
					oninput: m.withAttr('value', ContactForm.vm.emailBody),
					placeholder: 'Enter email body...'
				}),
				m('button.form-button[type="button"]', { onclick: ContactForm.vm.sendData }, "Send")
			]),
			m('.icons-container', [
				m('a.icon-item[href="https://www.linkedin.com/in/aaron-flower-20748339"], [target="_blank"]',
					m('img', {src: "./assets/linkedIn.svg"})
				),
				m('a.icon-item[href="https://github.com/aaronpflower"], [target="_blank"]',
					m('img', {src: "./assets/github.svg"})
				)
			])
		]) 
	] 
}

module.exports = ContactForm;