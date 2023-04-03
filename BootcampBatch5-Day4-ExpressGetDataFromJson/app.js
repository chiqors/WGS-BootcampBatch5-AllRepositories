const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const fs = require('fs')
const app = express()
const port = 3000

// Information using EJS
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layout/mainLayout')
app.use(express.static('public'))
app.use(morgan('dev'))

// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
// })

const dirPath = './data'
const dataPath = './data/contacts.json'

function loadData() {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
        if (!fs.existsSync(dataPath)) {
            fs.writeFileSync(dataPath, '[]', 'utf-8')
        }
    }
    const loadFile = fs.readFileSync(dataPath, 'utf-8')
    const data = JSON.parse(loadFile)
    return data
}

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
})

app.get('/contact', (req, res) => {
    const contact = loadData()
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