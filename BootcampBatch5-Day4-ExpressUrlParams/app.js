const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/contact', (req, res) => {
    res.send('Contact Page')
})

app.get('/product/:product_id/category/:category_type', (req, res) => {
    res.send(req.params)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('404 Page Not Found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})