const router = require('express').Router();
const contactController = require('../controllers/contactController');

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