var SendEmailController = require('../controllers/SendEmail')

module.exports = function emailRoutes(app) {
	app.post('/api/v1/emails/send-email', SendEmailController.sendEmail);
}