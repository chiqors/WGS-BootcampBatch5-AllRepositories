const router = require('express').Router();
const contactController = require('../controllers/contactController');
// call database
const pool = require('../handler/db')

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
    })
})

router.get('/addasync', async(req, res) => {
    try {
        const name = "John Does"
        const email = "john@gmail.com"
        const mobile = "08123456789"
        const newCont = await pool.query(`INSERT INTO contacts (name, email, mobile) VALUES ('${name}', '${email}', '${mobile}') RETURNING *`)
        res.json(newCont)
    } catch (err) {
        console.error(err.message)
    }
})

// CRUD

// Read
router.get('/contact', contactController.index)
// Create
router.get('/contact/add', contactController.create)
// Store
router.post('/contact', contactController.store)
// Show Detail
router.get('/contact/show/:name', contactController.show)
// Edit
router.get('/contact/edit/:name', contactController.edit)
// Update
router.put('/contact', contactController.update)
// Delete
router.delete('/contact', contactController.destroy)

// Query String Testing
router.get('/product/:product_id/category/:category_type', (req, res) => {
    res.send(req.params)
})

// Error Handling
router.use('/', (req, res) => {
    res.status(404)
    res.send('404 Page Not Found')
})

module.exports = router;