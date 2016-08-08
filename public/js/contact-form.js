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
		vm.buttonText = m.prop("Send"),
		vm.sendData = function() {
			if (typeof vm.senderName != undefined && typeof vm.sendEmail != undefined && typeof vm.emailSubject != undefined && vm.emailBody != undefined) {
				vm.buttonText("Please Wait")
				ContactForm.API.sendEmail()
				.then(function(res) {
					console.log(res.statusCode)
					if (res.statusCode == 202) {
						vm.buttonText("Thank You")
					} 
					else {
						vm.buttonText("An Error Occurred")
					}
				})
			}
		};
	}
	return vm
}())

ContactForm.controller = function() {
	ContactForm.vm.init();
}

ContactForm.view = function(ctrl) {
	return [
		m('h1', "Contact"),
		m('form', [
			m('input.form-input[type="text"]', {
				oninput: m.withAttr('value', ContactForm.vm.senderName),
				placeholder: 'Enter name...'
			}),
			m('.form-line'),
			m('input.form-input[type="text"]', {
				oninput: m.withAttr('value', ContactForm.vm.senderEmail),
				placeholder: 'Enter email...'
			}),
			m('.form-line'),
			m('input.form-input[type="text"]', {
				oninput: m.withAttr('value', ContactForm.vm.emailSubject),
				placeholder: 'Enter subject...'
			}),
			m('.form-line'),
			m('textarea.form-textarea', {
				oninput: m.withAttr('value', ContactForm.vm.emailBody),
				placeholder: 'Enter email body...'
			}),
			m('.form-line'),
			m('button.form-button[type="button"]', { onclick: ContactForm.vm.sendData }, ContactForm.vm.buttonText())
		])
	] 
}

module.exports = ContactForm;