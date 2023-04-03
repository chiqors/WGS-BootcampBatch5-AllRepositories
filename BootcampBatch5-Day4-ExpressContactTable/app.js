const express = require('express')
const app = express()
const port = 3000

// Information using EJS
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/contact', (req, res) => {
    const contact = [{
        nama: 'chiqo',
        notelp: '0812342423'
    }, {
        nama: 'agung',
        notelp: '082335345'
    }]
    res.render('contact', {contact})
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