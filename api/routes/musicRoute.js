const musicController = require('../controllers/musicController')

module.exports = (app) => {
	app.get('/musics', musicController.get)
}
