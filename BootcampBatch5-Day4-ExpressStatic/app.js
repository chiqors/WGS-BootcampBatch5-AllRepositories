const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// Information using EJS
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layout/mainLayout')
app.use(express.static('public'))

// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
// })

// URL Request
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
    })
    res
})

app.get('/contact', (req, res) => {
    const contact = [{
        nama: 'chiqo',
        notelp: '0812342423'
    }, {
        nama: 'agung',
        notelp: '082335345'
    }]
    res.render('contact', {
        contact,
        title: 'Contact Page'
    })
})

app.get('/product/:product_id/category/:category_type', (req, res) => {
    res.send(req.params)
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('404 Page Not Found')
})

// Run server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})