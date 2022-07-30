const axios = require('axios')

let endPoint = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=brazil&api_key=f784c8e83c9cc506031800f5b7ecfc9f&format=json`

exports.get = (req, res, next) => {

	axios.get(endPoint)
	.then(response => {
		let data = JSON.stringify(response.data)
		res.json(data)
	})
	.catch(error => {
		next(error)
	})

}
