var CurrentWeatherController = require('../controllers/CurrentWeather')

module.exports = function(app) {
	app.get("/api/v1/current-weather", CurrentWeatherController.getWeather);
}