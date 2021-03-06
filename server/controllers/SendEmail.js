var SendEmailController = {
	sendEmail: function(req, res, next) {
		console.log(req.body)
		var helper = require('sendgrid').mail
		from_email = new helper.Email(req.body.senderEmail)
		to_email = new helper.Email("aaronpflower@gmail.com")
		subject = req.body.emailSubject
		content = new helper.Content("text/plain", req.body.emailBody)
		mail = new helper.Mail(from_email, subject, to_email, content)

		var sg = require('sendgrid').SendGrid(process.env.SENDGRID_API_KEY)
		var requestBody = mail.toJSON()
		var request = sg.emptyRequest()
		request.method = 'POST'
		request.path = '/v3/mail/send'
		request.body = requestBody
		sg.API(request, function (response) {
			console.log(response)
			res.send(response)
		})
	}
}

module.exports = SendEmailController;