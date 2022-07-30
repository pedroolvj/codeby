const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

require('./routes/index')(app)

app.use(express.json())
app.listen(PORT)
