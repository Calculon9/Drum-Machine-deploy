const express = require('express')
const path = require('path')

const port = process.env.PORT || 5000

const app = express()

app.use(express.static('client'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client'))
})

app.listen(port, () => console.log(`Server listening on port ${port}`))