const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

const logger = (req, res, next) => {
    console.log(new Date().toTimeString());
    next();
}
app.use(logger)

app.get('/', (req, res) => {
    res.send(req.body)
})

app.listen(PORT, () => console.log('Server listening on PORT ' + PORT))